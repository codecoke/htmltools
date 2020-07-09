

(function(_global,_defModule,factory) {
  let hasDefModule = typeof _defModule ==='string' && _defModule !=='';
  if( typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = factory(); 
  }else if(typeof define === 'function' && define.amd){
    hasDefModule ?  define(_defModule,factory) : define(factory);
  }else if(hasDefModule){
    _global[_defModule] = factory();
  }
}(this,'CodeCoke',(function (_cocGlobal,_defModule,_dependArr) { 'use strict';

/* eslint-disable */
  let Hexmd5 = function(){this.attr={'hexcase':0,'b64pad':''};};
  Hexmd5.prototype={'md5':function(s,l){return l?this.hex_md5(s).substr(8,16):this.hex_md5(s)},'hex_md5':function(s){return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)))},'rstr2hex':function(s){let hex_tab=this.attr&&this.attr.hexcase?'0123456789ABCDEF':'0123456789abcdef';let _r='',x,_z=s.length;for(let i=0;i<_z;i++){x=s.charCodeAt(i);_r+=hex_tab.charAt((x>>>4)&0x0F)+hex_tab.charAt(x&0x0F)}return _r},'rstr_md5':function(s){return this.binl2rstr(this.binl_md5(this.rstr2binl(s),s.length*8))},'binl2rstr':function(s){let r='',i=0,_z=s.length*32;for(;i<_z;i+=8){r+=String.fromCharCode((s[i>>5]>>>(i%32))&0xFF)}return r},'rstr2binl':function(_str){let r=Array(_str.length>>2),rl=r.length,rl8=_str.length*8,i,n;for(i=0;i<rl;i++){r[i]=0};for(n=0;n<rl8;n+=8){r[n>>5]|=(_str.charCodeAt(n/8)&0xFF)<<(n%32)};return r},'str2rstr_utf8':function(_str){let _r='',i=-1,x,y,_z=_str.length;while(++i<_z){x=_str.charCodeAt(i);y=i+1<_str.length?_str.charCodeAt(i+1):0;if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);i++}if(x<=0x7F){_r+=String.fromCharCode(x)}else if(x<=0x7FF){_r+=String.fromCharCode(0xC0|((x>>>6)&0x1F),0x80|(x&0x3F))}else if(x<=0xFFFF){_r+=String.fromCharCode(0xE0|((x>>>12)&0x0F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F))}else if(x<=0x1FFFFF){_r+=String.fromCharCode(0xF0|((x>>>18)&0x07),0x80|((x>>>12)&0x3F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F))}}return _r},'binl_md5':function(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;let a=1732584193,b=-271733879,c=-1732584194,d=271733878,xlen=x.length,i=0;for(;i<xlen;i+=16){let o_4=[a,b,c,d];a=this._f(a,b,c,d,x[i+0],7,-680876936);d=this._f(d,a,b,c,x[i+1],12,-389564586);c=this._f(c,d,a,b,x[i+2],17,606105819);b=this._f(b,c,d,a,x[i+3],22,-1044525330);a=this._f(a,b,c,d,x[i+4],7,-176418897);d=this._f(d,a,b,c,x[i+5],12,1200080426);c=this._f(c,d,a,b,x[i+6],17,-1473231341);b=this._f(b,c,d,a,x[i+7],22,-45705983);a=this._f(a,b,c,d,x[i+8],7,1770035416);d=this._f(d,a,b,c,x[i+9],12,-1958414417);c=this._f(c,d,a,b,x[i+10],17,-42063);b=this._f(b,c,d,a,x[i+11],22,-1990404162);a=this._f(a,b,c,d,x[i+12],7,1804603682);d=this._f(d,a,b,c,x[i+13],12,-40341101);c=this._f(c,d,a,b,x[i+14],17,-1502002290);b=this._f(b,c,d,a,x[i+15],22,1236535329);a=this._g(a,b,c,d,x[i+1],5,-165796510);d=this._g(d,a,b,c,x[i+6],9,-1069501632);c=this._g(c,d,a,b,x[i+11],14,643717713);b=this._g(b,c,d,a,x[i+0],20,-373897302);a=this._g(a,b,c,d,x[i+5],5,-701558691);d=this._g(d,a,b,c,x[i+10],9,38016083);c=this._g(c,d,a,b,x[i+15],14,-660478335);b=this._g(b,c,d,a,x[i+4],20,-405537848);a=this._g(a,b,c,d,x[i+9],5,568446438);d=this._g(d,a,b,c,x[i+14],9,-1019803690);c=this._g(c,d,a,b,x[i+3],14,-187363961);b=this._g(b,c,d,a,x[i+8],20,1163531501);a=this._g(a,b,c,d,x[i+13],5,-1444681467);d=this._g(d,a,b,c,x[i+2],9,-51403784);c=this._g(c,d,a,b,x[i+7],14,1735328473);b=this._g(b,c,d,a,x[i+12],20,-1926607734);a=this._h(a,b,c,d,x[i+5],4,-378558);d=this._h(d,a,b,c,x[i+8],11,-2022574463);c=this._h(c,d,a,b,x[i+11],16,1839030562);b=this._h(b,c,d,a,x[i+14],23,-35309556);a=this._h(a,b,c,d,x[i+1],4,-1530992060);d=this._h(d,a,b,c,x[i+4],11,1272893353);c=this._h(c,d,a,b,x[i+7],16,-155497632);b=this._h(b,c,d,a,x[i+10],23,-1094730640);a=this._h(a,b,c,d,x[i+13],4,681279174);d=this._h(d,a,b,c,x[i+0],11,-358537222);c=this._h(c,d,a,b,x[i+3],16,-722521979);b=this._h(b,c,d,a,x[i+6],23,76029189);a=this._h(a,b,c,d,x[i+9],4,-640364487);d=this._h(d,a,b,c,x[i+12],11,-421815835);c=this._h(c,d,a,b,x[i+15],16,530742520);b=this._h(b,c,d,a,x[i+2],23,-995338651);a=this._i(a,b,c,d,x[i+0],6,-198630844);d=this._i(d,a,b,c,x[i+7],10,1126891415);c=this._i(c,d,a,b,x[i+14],15,-1416354905);b=this._i(b,c,d,a,x[i+5],21,-57434055);a=this._i(a,b,c,d,x[i+12],6,1700485571);d=this._i(d,a,b,c,x[i+3],10,-1894986606);c=this._i(c,d,a,b,x[i+10],15,-1051523);b=this._i(b,c,d,a,x[i+1],21,-2054922799);a=this._i(a,b,c,d,x[i+8],6,1873313359);d=this._i(d,a,b,c,x[i+15],10,-30611744);c=this._i(c,d,a,b,x[i+6],15,-1560198380);b=this._i(b,c,d,a,x[i+13],21,1309151649);a=this._i(a,b,c,d,x[i+4],6,-145523070);d=this._i(d,a,b,c,x[i+11],10,-1120210379);c=this._i(c,d,a,b,x[i+2],15,718787259);b=this._i(b,c,d,a,x[i+9],21,-343485551);a=this.safeAdd(a,o_4[0]);b=this.safeAdd(b,o_4[1]);c=this.safeAdd(c,o_4[2]);d=this.safeAdd(d,o_4[3])}return[a,b,c,d]},'safeAdd':function(x,y){let lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)},'bit_rol':function(num,cnt){return(num<<cnt)|(num>>>(32-cnt))},'_cmn':function(q,a,b,x,s,t){return this.safeAdd(this.bit_rol(this.safeAdd(this.safeAdd(a,q),this.safeAdd(x,t)),s),b)},'_f':function(a,b,c,d,x,s,t){return this._cmn((b&c)|((~b)&d),a,b,x,s,t)},'_g':function(a,b,c,d,x,s,t){return this._cmn((b&d)|(c&(~d)),a,b,x,s,t)},'_h':function(a,b,c,d,x,s,t){return this._cmn(b^c^d,a,b,x,s,t)},'_i':function(a,b,c,d,x,s,t){return this._cmn(c^(b|(~d)),a,b,x,s,t)}};
  /* eslint-enable */

  const Util = function (_arg1) {
    // arrForEach
  };
  const util_proto = {
    'arrForEach'(fakeArr,fn){
      let i, item, result;
      const length = fakeArr.length || 0;
      for (i = 0; i < length; i++) {
        item = fakeArr[i];
        result = fn.call(fakeArr, item, i);
        if (result === false) {
          break;
        }
      }
    }
    ,'cblast'(...arg){
      let cb_arg = arg.length > 0 ? [...arg] : null
        , cb_fn = cb_arg ? cb_arg.pop() : null
      ;
      if(cb_fn && typeof cb_fn ==='function') cb_fn(...cb_arg);
    }

  };

  Util.prototype = util_proto;
 

 
  let _config ={
    baseUrl:'../lib',
    paths:{
      'editor':'codecoke/editor.2'
      //,'codecoke':'codecoke/codecoke.1'
      ,'$':'third-party/zepto'
      ,'wangEditor':'third-party/wangEditor.1'
      ,'etpl':'third-party/etpl'
    }
    ,'map':{
      '*':{
        'CodeCoke':'codecoke/codecoke.2.2'
      }
    }
    ,'bundles':{}
    ,'shim':{
      'etpl':{
        exports:'etpl'
        ,deps:[
          '$'
        ]
      }
      // ,'wangEditor':{
      //   exports:'wangEditor'
      //   ,init:(wangEditor) => {
      //     window.wangEditor=wangEditor;
      //   }
      // }
    }
    // ,'urlArgs': (id,url) => (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime()

  };

  
  
  let _codecoke = {
    'moduleName':_defModule
    ,'from':'codecoke.1.js'
    ,'dependarr':_dependArr
    ,'requireConfig':_config
    ,'version':'1.0.0.0'
    ,'author':'ecmascript.xyz'
  };
  _codecoke.hex = new Hexmd5();
  _codecoke.util = _codecoke.util || new Util();




  requirejs.config(_config);
  
  // console.log(_config);
  
  _cocGlobal[_defModule]= _codecoke;
  // _cocGlobal.t22='is window t22'

  return () => _codecoke;
})(this,'CodeCoke',['dependarr'])));