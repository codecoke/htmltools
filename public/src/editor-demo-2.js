


requirejs(['../lib/codecoke/codecoke.2.3'], () => {
  
  let md5_str ='莫非';
  let editorid='#myeditor';

  let md5_try= () => {
    $('#div2').append('<br><span> 7243dd555189eb5c70c9ec947af2e274 --- md5:'+md5_str+'</span>');
    $('#div2').append('<br> -----------'+codecoke.hex.md5(md5_str,16)+' --- codecoke.hex.md5("i23456") </span>');
    $('#div2').append('<br> '+codecoke.hex.md5(md5_str)+' --- codecoke.hex.md5("i23456") </span>');
    
  };


  require(['editor'],function (Editor) {
    //console.log(typeof wangEditor)
    let e = new Editor('#myeditor',{
      'method':'method2'
      ,'toolid':'#edittool'
      // ,'emotions':[
      //   {
      //     title: '常用',type: 'emoji',
      //     content: codecoke.ui.emoji[0]
      //   }
      //   , {
      //     title: '常用2',type: 'emoji',
      //     content: codecoke.ui.emoji[0]
      //   }
        
      // ]
    });

    let el_btn  =$('<div class="el_btn"></div>');
    let el_txt  =$('<textarea class="textAuto">txt</textarea>');
    let el_html =$('<textarea class="textAuto">html</textarea>');
    let el_json =$('<textarea class="textAuto">json</textarea>');
    let el_info =$('<textarea class="textAuto">info</textarea>');

    $(editorid).after([el_info,el_json,el_html,el_txt,el_btn]);



    e.config.onchange = function (html) {
      // 监控变化，同步更新到 textarea
      el_html.val(html);
      el_txt.val(e.E.txt.text());
    };
    e.config.debug = window.location.href.indexOf('-demo') > 0;

    e.creat(md5_try);
    e.txt.html('<p>通过 js 动态设置的内容</p>');
    
    // console.log(e.el.id.txt +'\n'+ e.el.id.tool);
    // console.log(e.el.tool.attr('id'));

    // let arr1 ='Boolean Number String Function Array Date RegExp Object Error'.split(' ');
    
    // arr1.forEach(function (v,i,a) {
    //   // body
    //   a[i]=['[object ' +v+' ]',v.toLowerCase()];
    // });

    

    console.log(codecoke.util.type(e.txt.text));
    
    
    // console.log(e.el.toolid);
    
   
    

    el_btn.append(
      $('<button>text</button>').on('click',() => {
        el_txt.val(e.txt.text());
      })
    ).append(
      $('<button>html</button>').on('click',() => {
        el_html.val(e.txt.html());
      })
    ).append(
      $('<button>json</button>').on('click',() => {
        el_json.val(JSON.stringify(e.txt.getJSON()));
      })
    ).append(
      $('<button>clear</button>').on('click',() => {
        e.txt.clear();
      })
    );
    
  });
  

});