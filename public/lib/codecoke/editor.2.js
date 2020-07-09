/* 
  typeof exports === 'object' && typeof module !== 'undefined' ? 
  module.exports = cocFactory() 
  : typeof define === 'function' && define.amd ? 
    define(cocFactory) :	(_global.wangEditor = cocFactory())

  forEach() 方法对数组的每一个元素执行一次提供的函数。
  map() 方法创建一个新数组，其结果是该数组都执行一次函数，原函数保持不变。
  fn(v i arr)

  filter() 方法使指定函数测试数组的每一个元素，并放回一个通过元素的新数组。
  some() 方法测试该数组有元素通过了指定函数的测试，如果有返回true，否则，返回false。
  every() 方法测试该数组是否全部通过指定函数测试，全部通过返回true，否则，返回false。

  属性
获取编辑器的唯一标识 editor.id
获取编辑区域 DOM 节点 editor.$textElem[0]
获取菜单栏 DOM 节点 editor.$toolbarElem[0]
获取编辑器配置信息 editor.config
获取编辑区域 DOM 节点 ID editor.textElemId
获取菜单栏 DOM 节点 ID editor.toolbarElemId
获取菜单栏中“图片”菜单的 DOM 节点 ID editor.imgMenuId

  方法
选取操作
获取选中的文字 editor.selection.getSelectionText()
获取选取所在的 DOM 节点 editor.selection.getSelectionContainerElem()[0]
开始节点 editor.selection.getSelectionStartElem()[0]
结束节点 editor.selection.getSelectionEndElem()[0]
折叠选取 editor.selection.collapseRange()
更多可参见源码中定义的方法
编辑内容操作
插入 HTML editor.cmd.do('insertHTML', '<p>...</p>')
可通过editor.cmd.do(name, value)来执行document.execCommand(name, false, value)的操作
*/


(function(_gl,_def,depArr=[],_fn) {
  let hasDefModule = typeof _def ==='string' && _def !=='';
  if( typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = _fn();
  }else if(typeof define === 'function' && define.amd){
    hasDefModule ?  define(_def,_fn) : define(depArr,_fn);
  }else if(hasDefModule){
    _gl[_def] = _fn();
  }
}(this,'',['$','wangEditor'],(function (_global,_defModule,_dependArr) { 'use strict';

  

  const Editor = function (...args) {
    this.sett={
      'editconfig':{
        'emotions':[
          {
            title: '常用',type: 'emoji',
            content: codecoke.ui.emoji[0]
          }
          ,{
            title: '表情',type: 'emoji',
            content: codecoke.ui.emoji[1]
          }
          ,{
            title: '手势',type: 'emoji',
            content: codecoke.ui.emoji[2]
          }
        ]
      }
      //editconfig end
    };
    this.el= {'id':{}};
    this.wangEditor = _global['wangEditor'];
    this.init(...args);
  };
  
  const _proto = {
    'init'(
      bodyid
      ,{ 
        toolid = null
        ,emotions = null
        , method = 'GET'
        , headers = {} 
      } = {}
    ) {
      
      this.sett.bodyid= bodyid;
      this.sett.toolid= toolid;

      // this.el= this.el || {'id':{}};
      //this.el.body= $(this.sett.bodyid);
      //this.el.tool = $(this.sett.toolid);

      this.method= method;

      

      this.config = this.config || this.sett.editconfig;
      emotions && (this.config.emotions = emotions);

      this.E = this.sett.toolid
        ? new this.wangEditor(this.sett.toolid,this.sett.bodyid)
        : new this.wangEditor(this.sett.bodyid)
      ;
      
      this.E.customConfig = this.config;
      
      
    }
    ,'creat'(...arg) {
      // forEach fn(v i arr)
      this.E.create();
      this.txt = this.E.txt;

      this.el.id.txt  = this.E.textElemId;
      this.el.id.tool = this.E.toolbarElemId;

      this.el.txt = $(this.E.$textElem[0]);
      this.el.tool = $(this.E.$toolbarElem[0]);

      arg.length && codecoke.util.lastCallback(...arg);
     
    }

  };
 


  Editor.prototype = _proto;
  return () => Editor;
})( this,'Editor',['dependarr'] )));



