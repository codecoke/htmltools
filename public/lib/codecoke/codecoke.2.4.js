

(function(_global,_defModule,factory) {
  let hasDefModule = typeof _defModule ==='string' && _defModule !=='';
  if( typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = factory(); 
  }else if(typeof define === 'function' && define.amd){
    hasDefModule ?  define(_defModule,factory) : define(factory);
  }else if(hasDefModule){
    _global[_defModule] = factory();
  }
}(this,'codecoke',(function (_cocGlobal,_defModule,_dependArr) { 'use strict';


  let Hexmd5=  ((hexcase) => {
    let _hex_md5 = function(){};
    /* eslint-disable */
    _hex_md5.prototype = {
      'md5'(s,l){return l?this._md5(s).substr(8,16):this._md5(s);}
      ,'_md5'(s){
        let hex_tab ='0123456789'+( hexcase || 'ABCDEF')
          ,i=0,n=0
          ,r=''
          ,arr,arr2,x,y
          ,sl,sl8,al
      ;
      
        sl=s.length;
        i=-1;
  
        while(++i < sl ){
          x= s.charCodeAt(i);
          y= i+1 < sl ? s.charCodeAt(i+1) : 0;
          if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){
            x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);
            i++;
          }
          if(x<=0x7F){
            r += String.fromCharCode(x);
          }else if(x<=0x7FF){
            r += String.fromCharCode(0xC0|((x>>>6)&0x1F),0x80|(x&0x3F));
          }else if(x<=0xFFFF){
            r += String.fromCharCode(0xE0|((x>>>12)&0x0F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));
          }else if(x<=0x1FFFFF){
            r += String.fromCharCode(0xF0|((x>>>18)&0x07),0x80|((x>>>12)&0x3F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));
          }
        }
  
        s = r;
        sl= s.length;
  
        arr2 = Array(sl>>2);
        sl8 = sl*8 ;
        al = arr2.length;
  
        for(i=0; i< al; i++){arr2[i]=0};
        for(n=0; n< sl8; n+=8){arr2[n>>5]|=(s.charCodeAt(n/8)&0xFF)<<(n%32)};
  
        arr = this.binl_md5(arr2,sl8);
        al = arr.length*32;
  
        r='';
        for(i=0;i<al;i+=8){r += String.fromCharCode((arr[i>>5]>>>(i%32))&0xFF);}
  
        sl = r.length;
        s='';
        for(n=0; n < sl; n++){
          x = r.charCodeAt(n);
          s += hex_tab.charAt((x>>>4)&0x0F)+hex_tab.charAt(x&0x0F)
        }
     
        return s;
      }
      ,'binl_md5'(x, l) {
        let a_4 =[1732584193,-271733879,-1732584194,271733878]
          ,o_4 =[]
          ,xlen,a,b,c,d
      ;
        x[l>>5]|=0x80<<((l)%32);
        x[(((l+64)>>>9)<<4)+14]=l;
        xlen = x.length;
        for (let i=0;i < xlen; i += 16) {
          a = a_4[0];
          b = a_4[1];
          c = a_4[2];
          d = a_4[3];
          o_4 = [a,b,c,d];
  
          a = this._f(a, b, c, d, x[i + 0], 7, -680876936);
          d = this._f(d, a, b, c, x[i + 1], 12, -389564586);
          c = this._f(c, d, a, b, x[i + 2], 17, 606105819);
          b = this._f(b, c, d, a, x[i + 3], 22, -1044525330);
          a = this._f(a, b, c, d, x[i + 4], 7, -176418897);
          d = this._f(d, a, b, c, x[i + 5], 12, 1200080426);
          c = this._f(c, d, a, b, x[i + 6], 17, -1473231341);
          b = this._f(b, c, d, a, x[i + 7], 22, -45705983);
          a = this._f(a, b, c, d, x[i + 8], 7, 1770035416);
          d = this._f(d, a, b, c, x[i + 9], 12, -1958414417);
          c = this._f(c, d, a, b, x[i + 10], 17, -42063);
          b = this._f(b, c, d, a, x[i + 11], 22, -1990404162);
          a = this._f(a, b, c, d, x[i + 12], 7, 1804603682);
          d = this._f(d, a, b, c, x[i + 13], 12, -40341101);
          c = this._f(c, d, a, b, x[i + 14], 17, -1502002290);
          b = this._f(b, c, d, a, x[i + 15], 22, 1236535329);
  
          a = this._g(a, b, c, d, x[i + 1], 5, -165796510);
          d = this._g(d, a, b, c, x[i + 6], 9, -1069501632);
          c = this._g(c, d, a, b, x[i + 11], 14, 643717713);
          b = this._g(b, c, d, a, x[i + 0], 20, -373897302);
          a = this._g(a, b, c, d, x[i + 5], 5, -701558691);
          d = this._g(d, a, b, c, x[i + 10], 9, 38016083);
          c = this._g(c, d, a, b, x[i + 15], 14, -660478335);
          b = this._g(b, c, d, a, x[i + 4], 20, -405537848);
          a = this._g(a, b, c, d, x[i + 9], 5, 568446438);
          d = this._g(d, a, b, c, x[i + 14], 9, -1019803690);
          c = this._g(c, d, a, b, x[i + 3], 14, -187363961);
          b = this._g(b, c, d, a, x[i + 8], 20, 1163531501);
          a = this._g(a, b, c, d, x[i + 13], 5, -1444681467);
          d = this._g(d, a, b, c, x[i + 2], 9, -51403784);
          c = this._g(c, d, a, b, x[i + 7], 14, 1735328473);
          b = this._g(b, c, d, a, x[i + 12], 20, -1926607734);
  
          a = this._h(a, b, c, d, x[i + 5], 4, -378558);
          d = this._h(d, a, b, c, x[i + 8], 11, -2022574463);
          c = this._h(c, d, a, b, x[i + 11], 16, 1839030562);
          b = this._h(b, c, d, a, x[i + 14], 23, -35309556);
          a = this._h(a, b, c, d, x[i + 1], 4, -1530992060);
          d = this._h(d, a, b, c, x[i + 4], 11, 1272893353);
          c = this._h(c, d, a, b, x[i + 7], 16, -155497632);
          b = this._h(b, c, d, a, x[i + 10], 23, -1094730640);
          a = this._h(a, b, c, d, x[i + 13], 4, 681279174);
          d = this._h(d, a, b, c, x[i + 0], 11, -358537222);
          c = this._h(c, d, a, b, x[i + 3], 16, -722521979);
          b = this._h(b, c, d, a, x[i + 6], 23, 76029189);
          a = this._h(a, b, c, d, x[i + 9], 4, -640364487);
          d = this._h(d, a, b, c, x[i + 12], 11, -421815835);
          c = this._h(c, d, a, b, x[i + 15], 16, 530742520);
          b = this._h(b, c, d, a, x[i + 2], 23, -995338651);
        
          a = this._i(a, b, c, d, x[i + 0], 6, -198630844);
          d = this._i(d, a, b, c, x[i + 7], 10, 1126891415);
          c = this._i(c, d, a, b, x[i + 14], 15, -1416354905);
          b = this._i(b, c, d, a, x[i + 5], 21, -57434055);
          a = this._i(a, b, c, d, x[i + 12], 6, 1700485571);
          d = this._i(d, a, b, c, x[i + 3], 10, -1894986606);
          c = this._i(c, d, a, b, x[i + 10], 15, -1051523);
          b = this._i(b, c, d, a, x[i + 1], 21, -2054922799);
          a = this._i(a, b, c, d, x[i + 8], 6, 1873313359);
          d = this._i(d, a, b, c, x[i + 15], 10, -30611744);
          c = this._i(c, d, a, b, x[i + 6], 15, -1560198380);
          b = this._i(b, c, d, a, x[i + 13], 21, 1309151649);
          a = this._i(a, b, c, d, x[i + 4], 6, -145523070);
          d = this._i(d, a, b, c, x[i + 11], 10, -1120210379);
          c = this._i(c, d, a, b, x[i + 2], 15, 718787259);
          b = this._i(b, c, d, a, x[i + 9], 21, -343485551);
  
          a_4 = [a,b,c,d];
          a_4.forEach((v,i) => {a_4[i] = this.s_add(v,o_4[i]);});
        }
        return a_4;
      }
      ,'s_add'(x,y){let l=(x&0xFFFF)+(y&0xFFFF),m=(x>>16)+(y>>16)+(l>>16);return(m<<16)|(l&0xFFFF);}
      ,'bit_rol'(n,c){return(n<<c)|(n>>>(32-c));}
      ,'_cmn'(q,a,b,x,s,t){return this.s_add(this.bit_rol(this.s_add(this.s_add(a,q),this.s_add(x,t)),s),b);}
      ,'_f'(a,b,c,d,x,s,t){return this._cmn((b&c)|((~b)&d),a,b,x,s,t);}
      ,'_g'(a,b,c,d,x,s,t){return this._cmn((b&d)|(c&(~d)),a,b,x,s,t);}
      ,'_h'(a,b,c,d,x,s,t){return this._cmn(b^c^d,a,b,x,s,t);}
      ,'_i'(a,b,c,d,x,s,t){return this._cmn(c^(b|(~d)),a,b,x,s,t);}
    };
    /* eslint-enable */

    return new _hex_md5();
  })('abcdef');



  // let Hexmd5 = function(){
  //   this.hexcase= 'abcdef';
  //   this.b64pad='';
  // };


  let emojiArr =[
    ['😀','😃','😄','😁','😆','😅','😂','😊','😇','🙂','🙃','😉'
      ,'🚯','😙','🚦','😈','🕜','🐪','🐖','🐕','🐓','🐐','🐏','🌍','🌜','🌝','🌞','🍐'
      ,'👎','🔑','🔒','🔋','💯','⭐','💩','💨','💥','💤','💣','💢','🈲','🚫'
      ,'🚽','⛔','💘','💔','❗','🍺','🍗','🍦','🔞','💋'
    ]
    ,['📷','💎','🎺','🎻','🎯','🀄','🎨','⚽','⚽','📈','📌','📆','📞','🎃'
      ,'🔨','🔫','💲','👙','👣','👠','👡','😺','😡','😷','🐾','🐳'
    ]
    ,['🙌', '👏', '👋', '👍', '👎', '👊', '✊', '️👌', '✋', '💪', '🙏', '️👆', '👇', '👈', '👉', '🖕', '🖐', '🤘']
  ];

  let badwordsObj = {
    'inTxtArr':[
      ['法轮','X_F_X']
      ,['falun','X_F_X']
      ,['毛泽东','Boss_Mao']
      ,['毛主席','Boss_mao']
      ,['邓小平','Boss_Deng']
      ,['天安门','SkySafeDoor']
      ,['江泽民','Boss_Joy']
      ,['胡锦涛','Boss_Who']
      ,['温家宝','Boss_Win']
      ,['操你','FKU']
      ,['妈逼','马逼']
      ,['靖国','婧国']
      ,['美国之音','米国の音']
      ,['k粉','k_Chlorine']
      ,['氯胺酮','Chlorine']
      ,['拉萨','啦薩']
      ,['自由','自油']
      ,['人权','秂权']
      ,['镇压','震压']
      ,['游行','遊行']
      ,['共产党','CC_Party']
      ,['党委','當委']
      ,['六四','Six_4']
      ,['89年','8_9_Year']
      ,['无界','Over_Bound']
      ,['学潮','College_Strike']
      ,['达赖','Mr_DLai']
      ,['政府','正府']
      ,['公安','公铵']
      ,['解放军','JieFang`sArmy']
      ,['18禁','18谨']
      ,['口交','口跤']
      ,['炸弹','炸蛋']
      ,['轰炸','烘炸']
      ,['维吾','维唔']
      ,['疆','壃']
      ,['性','悻']
      ,['门','門']
      ,['妓','姞']
      ,['液','澲']
      ,['淫','婬']
      ,['肛','岡']
      ,['焚','炃']
      ,['藏','臧']
      ,['警','驚']
      ,['臀','臋']
      ,['乳','娐']
      ,['奶','邚']
      ,['裸','躶']
      ,['奸','姧']
      ,['暴','鑤']
      ,['射','鵢']
      ,['插','揷']
      ,['舔','舚']
      ,['script','scr1pt']
      ,['frame','fraⅢe']
      ,['ヅ','_']
      ,['Γ','_']
      ,['┑','_']
      ,['ё','E']
      ,['д','A']
      ,['∴','∧']
      ,['ф','中']
      ,['∵','V']
      ,['ξ','ζ']
    ]
    ,'inputsArr':[
      ['eval','Eva1']
      ,['%','℅']
      ,['>','＞']
      ,['\\\'','`']
      ,['\\;','；']
      ,['-','—']
      ,['\\<','＜']
      ,['=','═']
      ,['\\*','※']
      ,['\\,','，']
      ,['script','scr1pt']
      ,['frame','fraⅢe']
      ,['ヅ','_']
      ,['Γ','_']
      ,['┑','_']
      ,['ё','E']
      ,['д','A']
      ,['∴','∧']
      ,['ф','中']
      ,['∵','v']
      ,['ξ','ζ']
    ]
    ,'userRegArr':[
      ['codecoke']
      ,['system']
      ,['xq']
      ,['莫非']
      ,['vince']
      ,['阿帕奇']
      ,['用户名']
      ,['密码']
      ,['通知']
      ,['站长']
      ,['Johnnys']
      ,['鸡']
      ,['鳖']
      ,['王八']
      ,['逼']
      ,['管理']
      ,['版主']
      ,['死']
      ,['闲情']
      ,['泡菜']
      ,['韩']
      ,['@']
    ]
  
  };




  const Util = function (_arg1) {
    this.class2typeArr = ['Boolean','Number','String','Function','Array','Date','RegExp','Object','Error'];
    this.class2typeObj={};
    this.badwordsObj = badwordsObj || {};
  };
  const util_proto = {
    // 'arrForEach'(fakeArr,fn){
    //   let i, item, result;
    //   const length = fakeArr.length || 0;
    //   for (i = 0; i < length; i++) {
    //     item = fakeArr[i];
    //     result = fn.call(fakeArr, item, i);
    //     if (result === false) {
    //       break;
    //     }
    //   }
    // }
    /* 
     * @name lastCallback
     * @grammar util.cblast(a,b,c...callback_fun) => callback_fun(a,b,c...)
    */
    'lastCallback'(...arg){
      let cb_arg = arg.length > 0 ? [...arg] : null
        , cb_fn = cb_arg ? cb_arg.pop() : null
      ;
      if(cb_fn && typeof cb_fn ==='function') cb_fn(...cb_arg);
    }
    /**
     * 统一将颜色值使用16进制形式表示
     * @name fixColor
     * @grammar util.fixColor(name,value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    ,'fixColor'(name, value) {
      if (/color/i.test(name) && /rgba?/.test(value)) {
        let array = value.split(',');
        if (array.length > 3)return '';
        
        value = '#';
        
        for (let i = 0; i<array.length; i++) {
          let color = array[i++];
          color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
          value += color.length == 1 ? '0' + color : color;
        }

        value = value.toUpperCase();
      }
      return  value;
    }
    ,'getUrlVars'(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }
    ,'trim' (str) {
      return str == null ? '' : String.prototype.trim.call(str);
    }
    ,'type'(obj) {
      return obj == null ? String(obj) : this.class2typeObj[toString.call(obj)] || 'object';
    }

    ,'inBadwords':function(a,_t) {
      // if(!codecoke.is.Str(a)) return '只能字符';
      let _badwordsO= this.badwordsObj || null;
      if(!_badwordsO) {
        return false;
      }
      // let _wl,_nr,_r=false;
      let _wl,_r=false;
      
      if(_t) {
        if(codecoke.is.Str(_t)&& _badwordsO[_t]) {
          _wl = badwordsObj[_t].length;
          for (var _i=0; _i<_wl; _i++) {
            if((new RegExp(_badwordsO[_t][_i][0],'ig')).test(a)) {
              _r= _badwordsO[_t][_i][0];
              break;
            }
          }
        }else if (codecoke.is.Arr(_t)) {
          var _tl =_t.length;
          for (var _c=0; _c<_tl; _c++) {
            if(codecoke.is.Str(_t[_c]) && _badwordsO[_t[_c]]) {
              _wl = _badwordsO[_t[_c]].length;
              for (var _d=0; _d<_wl; _d++) {
                if((new RegExp(_badwordsO[_t[_c]][_d][0],'ig')).test(a)) {
                  _r= _badwordsO[_t[_c]][_d][0];
                  break;
                }
              }
              if(_r) {break;}
            }else{
              continue;
            }
          }
        }
        return _r;
      }else{
        for (var _a in _badwordsO) {
          if(_badwordsO.hasOwnProperty(_a)) {
            _wl = _badwordsO[_a].length;
            for (var _b=0; _b<_wl; _b++) {
              if((new RegExp(_badwordsO[_a][_b][0],'ig')).test(a)) {
                _r=_badwordsO[_a][_b][0];
                break;
              }
            }
            if(_r) {return _r;}
          }
        }
        return _r;
      }
    }
    // inBadwords end
    ,'timeFormat' (_d, _inStr = 'yyyy-mm-dd hh:nn:ss.S'){
      var o = {
        'm+' : _d.getMonth()+1
        ,'d+' : _d.getDate()
        ,'h+' : _d.getHours()
        ,'n+' : _d.getMinutes()
        ,'s+' : _d.getSeconds(),
        'q+' : Math.floor((_d.getMonth()+3)/3)
        ,'S' : _d.getMilliseconds()
      };
      if(/(y+)/.test(_inStr)) {
        _inStr=_inStr.replace(
          RegExp.$1,
          (_d.getFullYear()+'').substr(4 - RegExp.$1.length)
        );
      }
      for(var k in o){
        if(new RegExp('('+ k +')').test(_inStr)) {
          _inStr = _inStr.replace(
            RegExp.$1,
            RegExp.$1.length==1 ? o[k] :('00'+ o[k]).substr((''+ o[k]).length)
          );
        }
      }
      return _inStr;
    }
    // timeformat end
    ,'time4sql'(_d){
      return 'cast(\''+this.timeFormat(_d,'yyyy-mm-dd hh:nn:ss.S')+'\' as datetime2)';
    }



  };

  Util.prototype = util_proto;


  let _util = new Util();
  _util.class2typeArr.forEach((v) => {_util.class2typeObj['[object ' + v +']'] = v.toLowerCase();});
 
  let _is ={
    'emptyObj' (obj) {
      let name;
      for (name in obj) return false;
      return true;
    }
    ,'num' (val) {
      let num = Number(val), type = typeof val;
      return val != null && type != 'boolean' &&
        (type != 'string' || val.length) &&
        !isNaN(num) && isFinite(num) || false;
    }
    ,'arr': Array.isArray ||function(obj){ return obj instanceof Array; }
  };


 
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
        'codecoke':'codecoke/codecoke.2.4'
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
    ,ui:{
      'emoji':emojiArr
    }
    ,'dependarr':_dependArr
    ,'requireConfig':_config
    ,'version':'1.0.0.0'
    ,'author':'ecmascript.xyz'
  };
  _codecoke.hex = Hexmd5;
  _codecoke.util = _util;
  _codecoke.is = _is;



  requirejs.config(_config);
  
  // console.log(_config);
  
  _cocGlobal[_defModule]= _codecoke;
  // _cocGlobal.t22='is window t22'

  return () => _codecoke;
})(this,'codecoke',['dependarr'])));