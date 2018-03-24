/* 
  typeof exports === 'object' && typeof module !== 'undefined' ? 
  module.exports = cocFactory() 
  : typeof define === 'function' && define.amd ? 
    define(cocFactory) :	(_global.wangEditor = cocFactory())
*/


(function(_global,_defModule,factory) {
  let hasDefModule = (typeof _defModule ==='string' && _defModule !=='')
  if( typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = factory() 
  }else if(typeof define === 'function' && define.amd){
    hasDefModule ?  define(_defModule,factory) : define(factory)
  }else if(hasDefModule){
    _global[_defModule] = factory()
  }
}(this,'',(function (_cocGlobal,_dependArr) { 'use strict'

  let _module = function () {
    return {
      'fnname':'fn1'
      ,'_dependarr':_dependArr
    }
  }

  
  
  require(['../lib/codecoke/codecoke.1'],function (codecoke) {
    // body
    console.log('run editor.1.js:\n'+ JSON.stringify(codecoke.requireConfig))

    require(['editor'],function (editor) {
      // body
      console.log(editor);
      
    })
    
  
  })

  // let _c =require('../lib/codecoke/codecoke.1')
  // console.log(_c)
  
  // requirejs(['../lib/codecoke/codecoke.1'],(codecoke) => {
  //   console.log(codecoke)
  //   console.log('i am req codecoke');
    
  
  
  // })
 
 
  _cocGlobal.t22='is window t22'

  return _module
})(this,['codecoke'])))



