define(function(){
    
  let _requireCof = {
      baseUrl:'./public/lib',
      paths:{
        jquery:[
           'jquery-3.3.1'
          ,'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min'
        ]
        ,'etpl':'etpl'
        //,umeditor:'umeditor'
        ,'UM': 'umeditor'
        ,'um_zh': 'umeditor/lang/zh-cn/zh-cn'
      },
      map: {
        '*': {
            'css': 'require-css'
        }
      }
      ,shim: {
        'UM':{
          deps:[
            'css!./umeditor/themes/xqv5/css/umeditor.css',
            'jquery',
            'etpl'
          ]
          ,exports: 'UM',
          // init:(etpl)=>{
          //   window.etpl=etpl;
          // }
        } 
        ,'etpl':{
          exports:'etpl'
        }
        ,'um_zh':{
          deps:['UM']
        } 
      },
      urlArgs: (id,url) => {
       return (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime();
      }
    
    /*   urlArgs: function(id, url) {
        var args = 'v=1';
        if (url.indexOf('view.html') !== -1) {
            args = 'v=2'
        }
    
        return (url.indexOf('?') === -1 ? '?' : '&') 
          + args +'&bust=' +  (new Date()).getTime()
        ;
    } */
    };
  
    let URL  ='public/lib/umeditor/';
   let _UMEDITOR_CONFIG= {
      UMEDITOR_HOME_URL : URL
      ,imageUrl:URL+"asp/imageUp.asp"
      ,imagePath:URL + "asp/"
      ,imageFieldName:"upfile"
      ,toolbar:[
          'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | selectall cleardoc | paragraph fontsize' ,
          '| justifyleft justifycenter justifyright justifyjustify |',
          'link unlink | emotion image video',
          '| horizontal print preview fullscreen'
         // ,'insertvideo'
          , '| formula map drafts'
      ]
  //,theme:'xqv5'
  ,emotionLocalization:true 
  ,'fontsize':[ 14, 20, 32]
  ,'paragraph':{'p':'', 'h4':'', 'h5':'', 'h6':''}
  ,filterRules: {}
      ,xssFilterRules: true
      ,inputXssFilter: true
      ,outputXssFilter: true
  ,whiteList: {
      a:      ['target', 'href', 'title', 'style', 'class', 'id'],
          abbr:   ['title', 'style', 'class', 'id'],
          address: ['style', 'class', 'id'],
          area:   ['shape', 'coords', 'href', 'alt', 'style', 'class', 'id'],
          article: ['style', 'class', 'id'],
          aside:  ['style', 'class', 'id'],
          audio:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'style', 'class', 'id'],
          b:      ['style', 'class', 'id'],
          bdi:    ['dir'],
          bdo:    ['dir'],
          big:    [],
          blockquote: ['cite', 'style', 'class', 'id'],
          br:     [],
          caption: ['style', 'class', 'id'],
          center: [],
          cite:   [],
          code:   ['style', 'class', 'id'],
          col:    ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
          colgroup: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
          dd:     ['style', 'class', 'id'],
          del:    ['datetime', 'style', 'class', 'id'],
          details: ['open', 'style', 'class', 'id'],
          div:    ['style', 'class', 'id'],
          dl:     ['style', 'class', 'id'],
          dt:     ['style', 'class', 'id'],
          em:     ['style', 'class', 'id'],
          embed:  ['style', 'class', 'id', '_url', 'type', 'pluginspage', 'src', 'width', 'height'
                      , 'wmode', 'play', 'loop', 'menu', 'allowscriptaccess', 'allowfullscreen'],
          h1:     ['style', 'class', 'id'],
          h2:     ['style', 'class', 'id'],
          h3:     ['style', 'class', 'id'],
          h4:     ['style', 'class', 'id'],
          h5:     ['style', 'class', 'id'],
          h6:     ['style', 'class', 'id'],
          hr:     [],
          i:      [],
          img:    ['src', 'alt', 'title', 'width', 'height', 'style', 'class', 'id', '_url'],
          ins:    ['datetime', 'style', 'class', 'id'],
          li:     ['style', 'class', 'id'],
          mark:   [],
          nav:    [],
          ol:     ['style', 'class', 'id'],
          p:      ['style'],
          pre:    ['style'],
          s:      [],
          section:[],
          small:  ['style', 'class'],
          span:   ['style', 'class'],
          sub:    [],
          sup:    [],
          strong: [],
          table:  ['width', 'border', 'align', 'valign', 'style', 'class', 'id'],
          tbody:  ['align', 'valign', 'style', 'class', 'id'],
          td:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
          tfoot:  ['align', 'valign', 'style', 'class', 'id'],
          th:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
          thead:  ['align', 'valign', 'style', 'class', 'id'],
          tr:     ['rowspan', 'align', 'valign', 'style', 'class', 'id'],
          tt:     ['style', 'class', 'id'],
          u:      [],
          ul:     ['style', 'class', 'id'],
          svg:    ['style', 'class', 'id', 'width', 'height', 'xmlns', 'fill', 'viewBox'],
          video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'style', 'class']
  }
};





  
  return{
       "require_cof":_requireCof,
       "eptl_cof":{"commandOpen": "<%","commandClose": "%>"}
       ,"_editor_cof":_UMEDITOR_CONFIG
        ,method2:function(){}
    }
});