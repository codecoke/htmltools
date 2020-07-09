(function () {

    var utils = UM.utils,
        browser = UM.browser,
        Base = {
        checkURL: function (url) {
            if(!url)    return false;
            url = utils.trim(url);
            if (url.length <= 0) {
                return false;
            }
            if (url.search(/http:\/\/|https:\/\//) !== 0) {
                url += 'http://';
            }

            url=url.replace(/\?[\s\S]*$/,"");

            if (!/(.gif|.jpg|.jpeg|.png)$/i.test(url)) {
                return false;
            }
            return url;
        },
        getAllPic: function (sel, $w, editor) {
            var me = this,
                arr = [],
                $imgs = $(sel, $w);

            $.each($imgs, function (index, node) {
                $(node).removeAttr("width").removeAttr("height");

//                if (node.width > editor.options.initialFrameWidth) {
//                    me.scale(node, editor.options.initialFrameWidth -
//                        parseInt($(editor.body).css("padding-left"))  -
//                        parseInt($(editor.body).css("padding-right")));
//                }

                return arr.push({
                    _src: node.src,
                    src: node.src
                    // _src: $(node.outerHTML).attr("src"), #原来是 node.src
                    // src: $(node.outerHTML).attr("src") ##原来是 node.src
                });
            });

            return arr;
        },
        scale: function (img, max, oWidth, oHeight) {
            var width = 0, height = 0, percent, ow = img.width || oWidth, oh = img.height || oHeight;
            if (ow > max || oh > max) {
                if (ow >= oh) {
                    if (width = ow - max) {
                        percent = (width / ow).toFixed(2);
                        img.height = oh - oh * percent;
                        img.width = max;
                    }
                } else {
                    if (height = oh - max) {
                        percent = (height / oh).toFixed(2);
                        img.width = ow - ow * percent;
                        img.height = max;
                    }
                }
            }

            return this;
        },
        close: function ($img) {

            $img.css({
                top: ($img.parent().height() - $img.height()) / 2,
                left: ($img.parent().width()-$img.width())/2
            }).prev().on("click",function () {

                if ( $(this).parent().remove().hasClass("edui-image-upload-item") ) {
                    //显示图片计数-1
                    Upload.showCount--;
                    Upload.updateView();
                }

            });

            return this;
        },
        createImgBase64: function (img, file, $w) {
            if (browser.webkit) {
                //Chrome8+
                img.src = window.webkitURL.createObjectURL(file);
            } else if (browser.gecko) {
                //FF4+
                img.src = window.URL.createObjectURL(file);
            } else {
                //实例化file reader对象
                var reader = new FileReader();
                reader.onload = function (e) {
                    img.src = this.result;
                    $w.append(img);
                };
                reader.readAsDataURL(file);
            }
        },
        callback: function (editor, $w, url, state) {

            if (state == "SUCCESS") {
                //显示图片计数+1
                Upload.showCount++;
                var $img = $("<img src='" + editor.options.imagePath + url + "' class='edui-image-pic' />"),
                    $item = $("<div class='edui-image-item edui-image-upload-item'><div class='edui-image-close'></div></div>").append($img);

                if ($(".edui-image-upload2", $w).length < 1) {
                    $(".edui-image-content", $w).append($item);

                    Upload.render(".edui-image-content", 2)
                        .config(".edui-image-upload2");
                } else {
                    $(".edui-image-upload2", $w).before($item).show();
                }

                $img.on("load", function () {
                    Base.scale(this, 120);
                    Base.close($(this));
                    $(".edui-image-content", $w).focus();
                });

            } else {
                currentDialog.showTip( state );
                window.setTimeout( function () {

                    currentDialog.hideTip();

                }, 3000 );
            }

            Upload.toggleMask();

        }
    };

    /*
     * 本地上传
     * */
    var Upload = {
        showCount: 0,
        uploadTpl: '<div class="edui-image-upload%%">' +
            '<span class="edui-image-icon"></span>' +
            '<form class="edui-image-form" method="post" enctype="multipart/form-data" target="up">' +
            '<input style=\"filter: alpha(opacity=0);\" class="edui-image-file" type="file" hidefocus name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp"/>' +
            '</form>' +

            '</div>',
        init: function (editor, $w) {
            var me = this;

            me.editor = editor;
            me.dialog = $w;
            me.render(".edui-image-local", 1);
            me.config(".edui-image-upload1");
            me.submit();
            me.drag();

            $(".edui-image-upload1").hover(function () {
                $(".edui-image-icon", this).toggleClass("hover");
            });

            if (!(UM.browser.ie && UM.browser.version <= 9)) {
                $(".edui-image-dragTip", me.dialog).css("display", "block");
            }


            return me;
        },
        render: function (sel, t) {
            var me = this;

            $(sel, me.dialog).append($(me.uploadTpl.replace(/%%/g, t)));

            return me;
        },
        config: function (sel) {
            var me = this,
                url=me.editor.options.imageUrl;

            url=url + (url.indexOf("?") == -1 ? "?" : "&") + "editorid="+me.editor.id;//初始form提交地址;

            $("form", $(sel, me.dialog)).attr("action", url);

            return me;
        },
        uploadComplete: function(r){
            var me = this;
            try{
                var json = eval('('+r+')');
                Base.callback(me.editor, me.dialog, json.url, json.state);
            }catch (e){
                var lang = me.editor.getLang('image');
                Base.callback(me.editor, me.dialog, '', (lang && lang.uploadError) || 'Error!');
            }
        },
        submit: function (callback) {

            var me = this,
                input = $( '<input style="filter: alpha(opacity=0);" class="edui-image-file" type="file" hidefocus="" name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp">'),
                input = input[0];

            $(me.dialog).delegate( ".edui-image-file", "change", function ( e ) {

                if ( !this.parentNode ) {
                    return;
                }

                $('<iframe name="up"  style="display: none"></iframe>').insertBefore(me.dialog).on('load', function(){
                    var r = this.contentWindow.document.body.innerHTML;
                    if(r == '')return;
                    me.uploadComplete(r);
                    $(this).unbind('load');
                    $(this).remove();

                });

                $(this).parent()[0].submit();
                Upload.updateInput( input );
                me.toggleMask("Loading....");
                callback && callback();

            });

            return me;
        },
        //更新input
        updateInput: function ( inputField ) {

            $( ".edui-image-file", this.dialog ).each( function ( index, ele ) {

                ele.parentNode.replaceChild( inputField.cloneNode( true ), ele );

            } );

        },
        //更新上传框
        updateView: function () {

            if ( Upload.showCount !== 0 ) {
                return;
            }

            $(".edui-image-upload2", this.dialog).hide();
            $(".edui-image-dragTip", this.dialog).show();
            $(".edui-image-upload1", this.dialog).show();

        },
        drag: function () {
            var me = this;
            //做拽上传的支持
            if (!UM.browser.ie9below) {
                me.dialog.find('.edui-image-content').on('drop',function (e) {

                    //获取文件列表
                    var fileList = e.originalEvent.dataTransfer.files;
                    var img = document.createElement('img');
                    var hasImg = false;
                    $.each(fileList, function (i, f) {
                        if (/^image/.test(f.type)) {
                            //创建图片的base64
                            Base.createImgBase64(img, f, me.dialog);

                            var xhr = new XMLHttpRequest();
                            xhr.open("post", me.editor.getOpt('imageUrl') + "?type=ajax", true);
                            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

                            //模拟数据
                            var fd = new FormData();
                            fd.append(me.editor.getOpt('imageFieldName'), f);

                            xhr.send(fd);
                            xhr.addEventListener('load', function (e) {
                                var r = e.target.response, json;
                                me.uploadComplete(r);
                                if (i == fileList.length - 1) {
                                    $(img).remove()
                                }
                            });
                            hasImg = true;
                        }
                    });
                    if (hasImg) {
                        e.preventDefault();
                        me.toggleMask("Loading....");
                    }

                }).on('dragover', function (e) {
                        e.preventDefault();
                    });
            }
        },
        toggleMask: function (html) {
            var me = this;

            var $mask = $(".edui-image-mask", me.dialog);
            if (html) {
                if (!(UM.browser.ie && UM.browser.version <= 9)) {
                    $(".edui-image-dragTip", me.dialog).css( "display", "none" );
                }
                $(".edui-image-upload1", me.dialog).css( "display", "none" );
                $mask.addClass("edui-active").html(html);
            } else {

                $mask.removeClass("edui-active").html();

                if ( Upload.showCount > 0 ) {
                    return me;
                }

                if (!(UM.browser.ie && UM.browser.version <= 9) ){
                    $(".edui-image-dragTip", me.dialog).css("display", "block");
                }
                $(".edui-image-upload1", me.dialog).css( "display", "block" );
            }

            return me;
        }
    };

    /*
     * 网络图片
     * */
    var NetWork = {
        init: function (editor, $w) {
            var me = this;

            me.editor = editor;
            me.dialog = $w;

            me.initEvt();
        },
        initEvt: function () {
            var me = this,
                url,
                $ele = $(".edui-image-searchTxt", me.dialog);

            $(".edui-image-searchAdd", me.dialog).on("click", function () {
                url = Base.checkURL($ele.val());

                if (url) {

                    $("<img src='" + url + "' class='edui-image-pic' />").on("load", function () {



                        var $item = $("<div class='edui-image-item'><div class='edui-image-close'></div></div>").append(this);

                        $(".edui-image-searchRes", me.dialog).append($item);

                        Base.scale(this, 120);

                        $item.width($(this).width());

                        Base.close($(this));

                        $ele.val("");
                    });
                }
            })
                .hover(function () {
                    $(this).toggleClass("hover");
                });
        }
    };

    var $tab = null,
        currentDialog = null;

    UM.registerWidget('image', {
        tpl: " <style type=\"text/css\">"+
            ".edui-dialog-image .edui-image-wrapper{font-size: 12px;margin: 15px;}"+
            ".edui-dialog-image .edui-image-upload1{position: absolute;top:50%;left:50%;width:44px;height:38px;margin-top:-19px; margin-left: -22px;}"+
            ".edui-dialog-image .edui-image-upload2{position:relative;float:left;width:120px;height:120px;margin:5px 0 0 5px;}"+
            ".edui-dialog-image .edui-image-form{position: absolute;left: 0px;top: 0px;width: 100%;height: 100%;opacity: 0;cursor: pointer;}"+
            ".edui-dialog-image .edui-image-form .edui-image-file{width: 100%;height:100%;filter: alpha(opacity=0)}"+
            ".edui-dialog-image .edui-image-upload1 .edui-image-icon{display: inline-block;width:44px;height:38px;background-image: url(\"<%=image_url%>images/upload1.png\")}"+
            ".edui-dialog-image .edui-image-upload1 .edui-image-icon.hover{background-position: -50px 0;}"+
            ".edui-dialog-image .edui-image-upload2 .edui-image-icon{display: inline-block;width:120px;height:120px;background-image: url(\"<%=image_url%>images/upload2.png\")}"+
            ".edui-dialog-image .edui-image-dragTip{position: absolute;display:none;top:50%;left:50%;margin-top:30px;margin-left: -60px;color: #222;font-size:14px;text-shadow: 0px 2px 3px #555;}"+
            ".edui-dialog-image .edui-image-content{height:330px;width:100%;position: relative;}"+
            ".edui-dialog-image .edui-image-mask{display: none;position: absolute;top:0;left:0;width: 100%; height: 100%;background-color:#fff;text-align: center;line-height:300px;color:#000;font-size:14px;font-weight:bold;opacity: 0.6;filter: alpha(opacity=60);}"+
            ".edui-dialog-image .edui-image-mask.edui-active{display: block;}"+
            ".edui-dialog-image .edui-image-searchBar{margin: 10px;}"+
            ".edui-dialog-image .edui-image-searchBar .edui-image-searchTxt{display: inline-block !important;*display: inline !important;*zoom:1;width:400px; border: 1px solid #c5d2ff; height: 20px; line-height: 18px; font-size: 14px; padding: 3px; margin: 0;outline:0;}"+
            ".edui-dialog-image .edui-image-searchBar .edui-image-searchAdd{display: inline-block !important;*display: inline !important;*zoom:1;width:60px; text-align:center;height: 25px;text-align: center;line-height: 25px;background-color: #ffffff;padding: 0; border: 1px solid #ababab;margin-left: 20px;cursor: pointer;}"+
            ".edui-dialog-image .edui-image-searchBar .edui-image-searchAdd.hover{background-color: #d5e1f2;padding: 0;border: 1px solid #a3bde3;}"+
            ".edui-dialog-image .edui-image-searchRes{height:280px;overflow:auto;}"+
            ".edui-dialog-image .edui-image-item{position:relative;float:left;width:120px;height:120px;border: 1px solid #CCC;cursor: default;margin: 5px 0 0 5px;}"+
            ".edui-dialog-image .edui-image-item .edui-image-pic{position: absolute;left:-9999px;}"+
            ".edui-dialog-image .edui-image-item .edui-image-close{position:absolute;right:0;background: url(\"<%=image_url%>images/close.png\");width:17px;height:17px;cursor:pointer;z-index:1}"+
            ".edui-dialog-image .edui-image-item.hover .edui-image-close{display: block;}"+
            "</style>"+

            "<div class=\"edui-image-wrapper\">" +
            "<ul class=\"edui-tab-nav\">" +
            "<li class=\"edui-tab-item edui-active\"><a data-context=\".edui-image-local\" class=\"edui-tab-text\"><%=lang_tab_local%></a></li>" +
            "<li  class=\"edui-tab-item\"><a data-context=\".edui-image-JimgSearch\" class=\"edui-tab-text\"><%=lang_tab_imgSearch%></a></li>" +
            "</ul>" +
            "<div class=\"edui-tab-content\">" +
            "<div class=\"edui-image-local edui-tab-pane edui-active\">" +
            "<div class=\"edui-image-content\"></div>" +
            "<div class=\"edui-image-mask\"></div>" +
            "<div class=\"edui-image-dragTip\"><%=lang_input_dragTip%></div>" +
            "</div>" +
            "<div class=\"edui-image-JimgSearch edui-tab-pane\">" +
            "<div class=\"edui-image-searchBar\">" +
            "<table><tr><td><input class=\"edui-image-searchTxt\" type=\"text\"></td>" +
            "<td><div class=\"edui-image-searchAdd\"><%=lang_btn_add%></div></td></tr></table>" +
            "</div>" +
            "<div class=\"edui-image-searchRes\"></div>" +
            "</div>" +
            "</div>" +
            "</div>",
        initContent: function (editor, $dialog) {
            var lang = editor.getLang('image')["static"],
                opt = $.extend({}, lang, {
                    image_url: UMEDITOR_CONFIG.UMEDITOR_HOME_URL + 'dialogs/image/'
                });

            Upload.showCount = 0;

            if (lang) {
                var html = $.parseTmpl(this.tpl, opt);
            }

            currentDialog = $dialog.edui();

            this.root().html(html);

        },
        initEvent: function (editor, $w) {
            $tab = $.eduitab({selector: ".edui-image-wrapper"})
                .edui().on("beforeshow", function (e) {
                    e.stopPropagation();
                });

            Upload.init(editor, $w);

            NetWork.init(editor, $w);
        },
        buttons: {
            'ok': {
                exec: function (editor, $w) {
                    var sel = "",
                        index = $tab.activate();

                    if (index == 0) {
                        sel = ".edui-image-content .edui-image-pic";
                    } else if (index == 1) {
                        sel = ".edui-image-searchRes .edui-image-pic";
                    }

                    var list = Base.getAllPic(sel, $w, editor);

                    if (index != -1) {
                        editor.execCommand('insertimage', list);
                    }
                }
            },
            'cancel': {}
        },
        width: 700,
        height: 408
    }, function (editor, $w, url, state) {
        Base.callback(editor, $w, url, state)
    })
})();

