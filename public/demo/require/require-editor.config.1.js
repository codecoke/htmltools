requirejs.config({
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
  urlArgs: (id,url) => (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime()
  

/*   urlArgs: function(id, url) {
    var args = 'v=1';
    if (url.indexOf('view.html') !== -1) {
        args = 'v=2'
    }

    return (url.indexOf('?') === -1 ? '?' : '&') 
      + args +'&bust=' +  (new Date()).getTime()
    ;
} */
});