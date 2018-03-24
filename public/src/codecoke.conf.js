
define(['require'], function(require) {
  'use strict';
  
  let codecoke = {
    version:'1.0.0'
    ,'conf':{
      'require':{
        'url':{
          //require.toUrl("./style.css");
          'public':'/public'
          ,'lib':'/public/lib'
          ,'src':'/public/src'

        }
        ,'paths':{
          'jquery':[
            'jquery-3.3.1'
            ,'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min'
          ]
          ,'etpl':'etpl'
          ,'UM': 'umeditor'
          ,'um_zh': 'umeditor/lang/zh-cn/zh-cn'
        }
        ,'map': {
          '*': {
              'css': 'require-css'
          }
        }
        ,'urlArgs': (id,url) => {
          return (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime();
         }
         ,'bundles':{

         }
      }
      //require end
    }
  };


  let _require_config = {
    'baseUrl':codecoke.conf.require.url.lib
    ,'paths':codecoke.conf.require.paths
    ,'bundles':{}
    ,'waitSeconds':0
    
    ,'map':{'*':{'css': 'require-css.js'}}
    ,'urlArgs':codecoke.conf.require.urlArgs
  };

  requirejs.config(
    _require_config
  );
  //console.log('i am codecoke.conf');
  // require(['jquery'],function($){

  //     console.log('get jquery');
      
  // })
  if ( typeof define === "function" && define.amd ) {
    define( "codecoke", [], function() {
      return codecoke;
    } );
  }

  //!whidow.codecoke && window.codecoke = codecoke;

  
  return codecoke;
});