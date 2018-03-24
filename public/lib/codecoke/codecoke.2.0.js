

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

  let Hexmd5 = function(){this.attr={'hexcase':0,'b64pad':''};};
  /* eslint-disable */
    Hexmd5.prototype={
      'md5':function(s,l){return l?this.hex_md5(s).substr(8,16):this.hex_md5(s);}
      ,'hex_md5':function(s){return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));}
      ,'rstr2hex':function(s){
        let hex_tab = this.attr && this.attr.hexcase ?'0123456789ABCDEF':'0123456789abcdef';
        let _r='',x ,_z=s.length;
        for(let i=0;i<_z;i++){
          x = s.charCodeAt(i);
          _r += hex_tab.charAt((x>>>4)&0x0F)+hex_tab.charAt(x&0x0F)
        }
        return _r;
      }
      ,'rstr_md5':function(s){return this.binl2rstr(this.binl_md5(this.rstr2binl(s),s.length*8))}
      ,'binl2rstr':function(s){
        let r='',i=0,_z=s.length*32;
        for(;i<_z;i+=8){r += String.fromCharCode((s[i>>5]>>>(i%32))&0xFF);}
        return r;
      }
      ,'rstr2binl':function(_str){var output=Array(_str.length>>2);for(var i=0;i<output.length;i++)output[i]=0;for(var i=0;i<_str.length*8;i+=8)output[i>>5]|=(_str.charCodeAt(i/8)&0xFF)<<(i%32);return output;}
      ,'str2rstr_utf8':function(_str){var _r='',i=-1,x,y,_z=_str.length;while(++i<_z){x=_str.charCodeAt(i);y=i+1<_str.length?_str.charCodeAt(i+1):0;if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);i++;}if(x<=0x7F)_r+=String.fromCharCode(x);else if(x<=0x7FF)_r+=String.fromCharCode(0xC0|((x>>>6)&0x1F),0x80|(x&0x3F));else if(x<=0xFFFF)_r+=String.fromCharCode(0xE0|((x>>>12)&0x0F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));else if(x<=0x1FFFFF)_r+=String.fromCharCode(0xF0|((x>>>18)&0x07),0x80|((x>>>12)&0x3F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));}return _r;}

      ,'binl_md5':function(x,len){
        x[len>>5]|=0x80<<((len)%32);
        x[(((len+64)>>>9)<<4)+14]=len;
        let a=1732584193, b=-271733879, c=-1732584194, d=271733878
          ,_tf = this.md5_ff
          ,_tg = this.md5_gg
          ,_th = this.md5_hh
          ,_ti = this.md5_ii
          ,_ta = this.safe_add
        ;
        for(let i=0;i<x.length;i+=16){
          // let olda=a, oldb=b, oldc=c, oldd=d;
          let o_4 =[a,b,c,d];
          
          a=_tf(a,b,c,d,x[i+0],7,-680876936);d=_tf(d,a,b,c,x[i+1],12,-389564586);c=_tf(c,d,a,b,x[i+2],17,606105819);b=_tf(b,c,d,a,x[i+3],22,-1044525330);a=_tf(a,b,c,d,x[i+4],7,-176418897);d=_tf(d,a,b,c,x[i+5],12,1200080426);c=_tf(c,d,a,b,x[i+6],17,-1473231341);b=_tf(b,c,d,a,x[i+7],22,-45705983);a=_tf(a,b,c,d,x[i+8],7,1770035416);d=_tf(d,a,b,c,x[i+9],12,-1958414417);c=_tf(c,d,a,b,x[i+10],17,-42063);b=_tf(b,c,d,a,x[i+11],22,-1990404162);a=_tf(a,b,c,d,x[i+12],7,1804603682);d=_tf(d,a,b,c,x[i+13],12,-40341101);c=_tf(c,d,a,b,x[i+14],17,-1502002290);b=_tf(b,c,d,a,x[i+15],22,1236535329);
          
          a=_tg(a,b,c,d,x[i+1],5,-165796510);d=_tg(d,a,b,c,x[i+6],9,-1069501632);c=_tg(c,d,a,b,x[i+11],14,643717713);b=_tg(b,c,d,a,x[i+0],20,-373897302);a=_tg(a,b,c,d,x[i+5],5,-701558691);d=_tg(d,a,b,c,x[i+10],9,38016083);c=_tg(c,d,a,b,x[i+15],14,-660478335);b=_tg(b,c,d,a,x[i+4],20,-405537848);a=_tg(a,b,c,d,x[i+9],5,568446438);d=_tg(d,a,b,c,x[i+14],9,-1019803690);c=_tg(c,d,a,b,x[i+3],14,-187363961);b=_tg(b,c,d,a,x[i+8],20,1163531501);a=_tg(a,b,c,d,x[i+13],5,-1444681467);d=_tg(d,a,b,c,x[i+2],9,-51403784);c=_tg(c,d,a,b,x[i+7],14,1735328473);b=_tg(b,c,d,a,x[i+12],20,-1926607734);
          
          a=_th(a,b,c,d,x[i+5],4,-378558);d=_th(d,a,b,c,x[i+8],11,-2022574463);c=_th(c,d,a,b,x[i+11],16,1839030562);b=_th(b,c,d,a,x[i+14],23,-35309556);a=_th(a,b,c,d,x[i+1],4,-1530992060);d=_th(d,a,b,c,x[i+4],11,1272893353);c=_th(c,d,a,b,x[i+7],16,-155497632);b=_th(b,c,d,a,x[i+10],23,-1094730640);a=_th(a,b,c,d,x[i+13],4,681279174);d=_th(d,a,b,c,x[i+0],11,-358537222);c=_th(c,d,a,b,x[i+3],16,-722521979);b=_th(b,c,d,a,x[i+6],23,76029189);a=_th(a,b,c,d,x[i+9],4,-640364487);d=_th(d,a,b,c,x[i+12],11,-421815835);c=_th(c,d,a,b,x[i+15],16,530742520);b=_th(b,c,d,a,x[i+2],23,-995338651);
          
          a=_ti(a,b,c,d,x[i+0],6,-198630844);d=_ti(d,a,b,c,x[i+7],10,1126891415);c=_ti(c,d,a,b,x[i+14],15,-1416354905);b=_ti(b,c,d,a,x[i+5],21,-57434055);a=_ti(a,b,c,d,x[i+12],6,1700485571);d=_ti(d,a,b,c,x[i+3],10,-1894986606);c=_ti(c,d,a,b,x[i+10],15,-1051523);b=_ti(b,c,d,a,x[i+1],21,-2054922799);a=_ti(a,b,c,d,x[i+8],6,1873313359);d=_ti(d,a,b,c,x[i+15],10,-30611744);c=_ti(c,d,a,b,x[i+6],15,-1560198380);b=_ti(b,c,d,a,x[i+13],21,1309151649);a=_ti(a,b,c,d,x[i+4],6,-145523070);d=_ti(d,a,b,c,x[i+11],10,-1120210379);c=_ti(c,d,a,b,x[i+2],15,718787259);b=_ti(b,c,d,a,x[i+9],21,-343485551);

          a=_ta(a,o_4[0]);
          b=_ta(b,o_4[1]);
          c=_ta(c,o_4[2]);
          d=_ta(d,o_4[3]);
        }
        return[a,b,c,d];
      }
      ,'safe_add':function(x,y){let lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
      
      ,'md5_cmn':function(q,a,b,x,s,t){return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a,q),this.safe_add(x,t)),s),b);}
      ,'bit_rol':function(num,cnt){return(num<<cnt)|(num>>>(32-cnt));}
      ,'md5_ff':function(a,b,c,d,x,s,t){return this.md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}
      ,'md5_gg':function(a,b,c,d,x,s,t){return this.md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}
      ,'md5_hh':function(a,b,c,d,x,s,t){return this.md5_cmn(b^c^d,a,b,x,s,t);}
      ,'md5_ii':function(a,b,c,d,x,s,t){return this.md5_cmn(c^(b|(~d)),a,b,x,s,t);}
    };
  /* eslint-enable */

  let Util = function (_arg1) {
    // arrForEach
  };
  Util.prototype.arrForEach = function (fakeArr,fn) {
    let i, item, result;
    const length = fakeArr.length || 0;
    for (i = 0; i < length; i++) {
      item = fakeArr[i];
      result = fn.call(fakeArr, item, i);
      if (result === false) {
        break;
      }
    }
  };
 

 
  let _config ={
    baseUrl:'../lib',
    paths:{
      'editor':'codecoke/editor.2'
      //,'codecoke':'codecoke/codecoke.1'
      ,'$':'third-party/zepto'
      ,'wangEditor':'third-party/wangEditor.1'
    }
    ,'map':{}
    ,'shim':{}
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