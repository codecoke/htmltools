

(function(_global,_defModule,factory) {
  let hasDefModule = (typeof _defModule ==='string' && _defModule !=='')
  if( typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = factory() 
  }else if(typeof define === 'function' && define.amd){
    hasDefModule ?  define(_defModule,factory) : define(factory)
  }else if(hasDefModule){
    _global[_defModule] = factory()
  }
}(this,'codecoke',(function (_cocGlobal,_dependArr) { 'use strict'
 
  let _config ={
    baseUrl:'../lib',
    paths:{
      'editor':'codecoke/editor.1'
      //,'codecoke':'codecoke/codecoke.1'
      ,'$':'third-party/zepto'
      ,'wangEditor':'third-party/wangEditor.1'
    }
    ,'map':{}
    ,'shim':{}
    ,'urlArgs': (id,url) => (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime()

  }

  let _module = function () {
    return {
      'fnname':'codecoke'
      ,'from':'codecoke.1.js'
      ,'_dependarr':_dependArr
      ,'requireConfig':_config
      ,'version':'1.0.0.0'
      ,'author':'ecmascript.xyz'
    }
  }

  requirejs.config(_config)
  
  // console.log(_config);
  
  
  _cocGlobal.t22='is window t22'

  return _module
})(this,['codecoke'])))