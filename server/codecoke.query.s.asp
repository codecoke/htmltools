<% @ LANGUAGE=JScript CODEPAGE=65001 %>

<%

Response.Charset='utf-8';
Session.CodePage=65001;
Server.ScriptTimeout=10000;
Response.Buffer = true;

/*JSON function*/
if(!this.JSON){
	JSON={};
	(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());
}
/*codecoke*/

if(!this.codecoke) {
	codecoke = {
		'scriptversion' :{
			'name':'CodeCoke CMS BIZ',
			'database':'Microsoft SQLserver 2008',
			'version':' 1.0.2',
			'publishdate':'2010-01-28 3:03:00',
			'author':'莫非',
			'url':'cms.codecoke.com/about',
			'mail':'w@codecoke.com'
		}
	};
	/*yyyy-mm-dd hh:nn:ss.S [object Boolean][object String][object Number][object Date]*/
	codecoke.is={
		'Null':function(a){
			return a===null;
		}
		,'Undefined':function(a){
			return  (typeof a === 'undefined');
		}
		,'Nt':function(a){
			return ( codecoke.is.Null(a) || codecoke.is.Undefined(a) || a==null || a==undefined || a===''|| ((''+a)==='') || ((''+a)=='null') || ((''+a)=='undefined'));
		}
		,'Func':function(a){
			return ((typeof(a)==='function')||(typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object Function]'));
		}
		,'Str':function(a){
			return (typeof(a) === 'string'||(typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object String]'))
		}
		,'Arr':function(a){
			return(a && typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object Array]');
		}
		,'Boolean':function(a){
			return (typeof(a)==='boolean'||(typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object Boolean]') )
		}
		,'Date':function(a){
			return (typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object Date]');
		}
		,'Mail':function(a) {
			return (
				a && (typeof(a)==='string')	&& (a.indexOf('@')>0) &&
				/^[a-z0-9]{1,}(?:[\.\_\-]{0,1}[a-z0-9]{1,})?(?:[\.\_\-]{0,1}[a-z0-9]{1,})?\@[a-z0-9]{1,}(?:[a-z0-9]{0,8}[\-]{0,1}(?:[a-z0-9]{1,}\.[a-z0-9]{2,4})?[a-z0-9]{0,8})?\.[a-z]{2,4}$/i.test(a)
			);
		}
		,'Handphone':function(a) {
			return ( a && /^1[3|5|8][0-9]{9}$/.test((''+a)) );

		}
		,'Num':function(a){
			return(typeof(a)==='number' && Object.prototype.toString.apply(a) === '[object Number]');
		}
		,'Obj':function(a){
			return (typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object Object]');
		}
		,'EmptyObj':function(_o) {
			for (var _a in _o) {if(_o.hasOwnProperty(_a)){return false;}}
			return true;
		}
		,'Regexp':function(a){
			return (typeof(a)==='object' && Object.prototype.toString.apply(a) === '[object RegExp]');
		}
		,'InBadwords':function(a,_t) {
			if(!codecoke.is.Str(a)) return '只能字符';
			var _badwordsO=$sev && $sev.$badwords ? $sev.$badwords : null;
			if(!_badwordsO) {
				return false;
			}
			var _wl,_nr,_r=false;
			if(_t) {
				if(codecoke.is.Str(_t)&& _badwordsO[_t]) {
					_wl = $sev.badwords[_t].length;
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
	}
	;
	//codecoke.type={
	//	'of':function(a){
	//		for(var i in codecoke.is){
	//			if(codecoke.is[i](a)){
	//				return i.toLowerCase();
	//			}
	//		}
	//	}
	//}
	//;
	codecoke.get= {
		'trim':function(s) {
			return codecoke.is.Str(s) ? s.replace(/^[\s\t ]+|[\s\t ]+$/g,'') :null
		}
		,'strlen':function (s) {
			return codecoke.is.Str(s) ? ((/[^\x00-\xff]/g.test(s)) ? s.replace(/[^\x00-\xff]/g,'cc').length : s.length) :0;
		}
		,'str' : function(_o,_after,_trans) {
			if(codecoke.is.Nt(_o)) {return null;}
			_o =codecoke.get.trim(''+_o);
			if(_after) {
				_after = codecoke.get.trim(''+_after).toLowerCase();
				switch (_after) {
					case 'noblank' : _o = _o.replace(/\s+/g,''); break;
					case 'oneblank' : _o = _o.replace(/\s{2,}/g,' '); break;
					case 'mail':
						_o = _o.length< 6 ? null : _o.replace(/\s+/g,'').toLowerCase();
						_o = _o ? (codecoke.is.Mail(_o) ? _o : null) :null;
						break;
					case 'md5':
						_o =(_o && _o.length==32 && /^[a-z0-9]{32}$/.test(''+_o)) ? _o : null;
						break;
					//case 'clearbadtag':
					//	_o = _o.replace(/\s{2,}/g,' ');
					//	_o = codecoke.get.clear_tagbank(_o);
					//	break;
					case 'guid32': _o = _o ? codecoke.get.guid32(_o) : null; break;
					case 'guid36': _o = _o ? codecoke.get.guid36(_o) : null; break;
					case 'guid38': _o = _o ? codecoke.get.guid38(_o) : null; break;

				}
			}
			if(_trans && _o) {
				_trans = codecoke.get.trim(''+_trans).toLowerCase();
				switch (_trans) {
					case 'lower' : _o = _o.toLowerCase(); break;
					case 'upper':_o =_o.toUpperCase(); break;
				}
			}
			return _o;
		}
		,'md516':function(_o) {
			return (
				_o && !codecoke.is.Nt(_o) && /^[a-z0-9]{32}$/.test(''+_o)
				? (''+_o).substr(8,16)
				: null
			);

		}
		,'md532':function(_o) {

		}
		,'InBadwords':function(a,_t) {
			if(!codecoke.is.Str(a)) return '只能字符';
			var _badwordsO=$sev && $sev.$badwords ? $sev.$badwords : null;
			if(!_badwordsO) {
				return false;
			}
			var _wl,_nr,_r=false;
			if(_t) {
				if(codecoke.is.Str(_t)&& _badwordsO[_t]) {
					_wl = $sev.badwords[_t].length;
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
		,'replaceBadwards':function (a,_t) {
			if(!codecoke.get.InBadwords(a,_t)) {return a;}
			var _badwordsO=$sev && $sev.$badwords ? $sev.$badwords : null;
			if(!_badwordsO) {
				return false;
			}
			var _wl,_nr,_r='';

			if(_t) {
				if(codecoke.is.Str(_t) && _badwordsO[_t]) {
					_wl = _badwordsO[_t].length;
					for (var _i=0; _i<_wl; _i++) {
						a=a.replace((new RegExp(_badwordsO[_t][_i][0],'ig')),(_badwordsO[_t][_i][1]||'_'));
					}
				}else if (codecoke.is.Arr(_t)) {
					var _tl =_t.length;
					for (var _c=0; _c<_tl; _c++) {
						if(codecoke.is.Str(_t[_c]) && _badwordsO[_t[_c]]) {
							_wl = _badwordsO[_t[_c]].length;
							for (var _d=0; _d<_wl; _d++) {
									a=a.replace((new RegExp(_badwordsO[_t[_c]][_d][0],'ig')),(_badwordsO[_t[_c]][_d][1] || '_'));
							}
						}else{continue;}
					}
				}
			}else {
				for (var _a in _badwordsO) {
					if(_badwordsO.hasOwnProperty(_a)) {
						_wl = _badwordsO[_a].length;
						for (var _b=0; _b<_wl; _b++) {
							a=a.replace((new RegExp(_badwordsO[_a][_b][0],'ig')),(_badwordsO[_a][_b][1]||'_'));
						}
					}
				}
			}
			return a;
		}
		,'indexInArr':function  (_arr,_v) {
			if(!codecoke.is.Arr(_arr) || !_v) {
				return -1;
			}else{
				var _al =_arr.length ,_r = -1;
				for (var _i=0; _i<_al; _i++) {if(_arr[_i]==_v) {_r=_i;break;}}
				return _r;
			}
		}
		,'n_0' : function(_o){if(!_o || codecoke.is.Nt(_o)) {return 0 ;}_o = parseInt(_o);return !isNaN(_o) ? _o : 0;}
		,'n_w' : function (_n) {
			if(_n>10000) {
				return (''+_n/10000).replace(/\.\d+$/,function(_m) {if(_m.substr(1,1)>0) {	return '.'+_m.substr(1,1)+'万';}else{return '万';}});
			}else{
				return ''+_n;
			}
		}
		,'n_rand':function (top,up){
			up = up ? parseInt(up) : 0;
			top = top? parseInt(top): 10;
			return parseInt(Math.random()*(top - up + 1) + up);
		}
		,'_guid':function (_o,_rl) {
			if(!codecoke.is.Str(_o))  return null;
			if(_o.indexOf('_') >0){_o=_o.substr(2);}
			_o =codecoke.get.trim(_o);
			var _l = _o.length;
			if((_l !=32) && (_l !=36) && (_l !=38)){ return null;}
			_o =_o.toUpperCase();
			var _ro =null;
			switch (_l) {
				case 36:
					if(/^[A-Z0-9]{8}\-[A-Z0-9]{4}\-[A-Z0-9]{4}\-[A-Z0-9]{4}\-[A-Z0-9]{12}$/.test(_o)) {
						switch (_rl) {
						case 32: _ro = _o.replace(/\-/g,'');break;
						case 36: _ro = _o;break;
						case 38:_ro ='{'+_o+'}'; break;
						}
					}
					break;
				case 38 :
					if(/^\{[A-Z0-9]{8}\-[A-Z0-9]{4}\-[A-Z0-9]{4}\-[A-Z0-9]{4}\-[A-Z0-9]{12}\}$/.test(_o)) {
						switch (_rl) {
						case 32:_ro = (_o.substr(1,36)).replace(/\-/g,'');break;
						case 36: _ro = _o.substr(1,36);break;
						case 38:_ro =_o; break;
						}
					}
					break;
				default:
					if(/^[A-Z0-9]{32}$/.test(_o)) {
						switch (_rl) {
						case 32: _ro = _o;break;
						case 36: _ro = _o.substr(0,8)+'-'+_o.substr(8,4)+'-'+_o.substr(12,4)+'-'+_o.substr(16,4)+'-'+_o.substr(20,12);break;
						case 38:_ro ='{'+_o.substr(0,8)+'-'+_o.substr(8,4)+'-'+_o.substr(12,4)+'-'+_o.substr(16,4)+'-'+_o.substr(20,12)+'}'; break;
						}
					}

			}
			return _ro;

		}
		,'guid32' :function(_o) {return _o ? codecoke.get._guid(_o,32) : null;}
		,'guid36' :function(_o) {return _o ? codecoke.get._guid(_o,36) : null;}
		,'guid38' :function (_o) {return _o ? codecoke.get._guid(_o,38) : null;	}
		,'time': function(_o) {
			if((new Date(_o)) !='NaN') {
				return (new Date(_o));
			}else{
				_o =	codecoke.is.Num(_o) ? _o : parseFloat(_o);
				return codecoke.is.Num(_o) ? (new Date(_o)) : null;
			}
		}
		,'timediff':function(_d1,_d2,_t) {
			var _len = _d2.getTime() - _d1.getTime();
			switch(_t.toLowerCase()){
				case 'y': return parseInt(_d2.getFullYear() - _d1.getFullYear());
				case 'm': return parseInt((_d2.getFullYear() - _d1.getFullYear())*12 + (_d2.getMonth()-_d1.getMonth()));
				case 'd': return parseInt(_len/1000/60/60/24);
				case 'w': return parseInt(_len/1000/60/60/24/7);
				case 'h': return parseInt(_len/1000/60/60);
				case 'n': return parseInt(_len/1000/60);
				case 's': return parseInt(_len/1000);
				case 'l': return parseInt(_len);
			}

		}
		,'timeadd': function(_d,_t,_n) {
			//var _d = this;
			switch(_t.toLowerCase()){
				case 'y': return new Date(_d.setFullYear(_d.getFullYear()+_n));
				case 'm': return new Date(_d.setMonth(_d.getMonth()+_n));
				case 'd': return new Date(_d.setDate(_d.getDate()+_n));
				case 'w': return new Date(_d.setDate(_d.getDate()+7*_n));
				case 'h': return new Date(_d.setHours(_d.getHours()+_n));
				case 's': return new Date(_d.setSeconds(_d.getSeconds()+_n));
				case 'l': return new Date(_d.setMilliseconds(_d.getMilliseconds()+_n));
				// case 'n': return new Date(_d.setMinutes(_d.getMinutes()+_n));
				default: return new Date(_d.setMinutes(_d.getMinutes()+_n));
			}
		}
		,'timeformat' : function(_d,_inStr){
			var o = {
				'm+' : _d.getMonth()+1
				,'d+' : _d.getDate()
				,'h+' : _d.getHours()
				,'n+' : _d.getMinutes()
				,'s+' : _d.getSeconds(),
				'q+' : Math.floor((_d.getMonth()+3)/3)
				,'S' : _d.getMilliseconds()
			};
			if(/(y+)/.test(_inStr)) {_inStr=_inStr.replace(RegExp.$1,(_d.getFullYear()+'').substr(4 - RegExp.$1.length));}
			for(var k in o){if(new RegExp('('+ k +')').test(_inStr)){ _inStr = _inStr.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :('00'+ o[k]).substr((''+ o[k]).length));}}
			return _inStr;
		}
		,'time4sql':function (_d) {
			//return 'cast(\''+_d.format('yyyy-mm-dd hh:nn:ss.S')+'\' as datetime2)';
			return 'cast(\''+codecoke.get.timeformat(_d,'yyyy-mm-dd hh:nn:ss.S')+'\' as datetime2)';

		}
		,'sqlTime' : function (_v,_t) {
			if(!_t) {
				var _mh =_v.match(/^(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9})/);
				return (new Date(_mh[1],_mh[2] -1,_mh[3],_mh[4],_mh[5],_mh[6],_mh[7])).getTime();
			}else{
				return 'cast(\''+(''+_v).trim().replace(/\.?[0]+$/,'')+'\' as datetime2)';
			}
		}
		,'clone' : function(_o) {
			var _ro;
			if(codecoke.is.Arr(_o)) {
				_ro =[];
				var _al =_o.length;
				for (var _i=0; _i<_al; _i++) {
					if(typeof (_o[_i])=='object' && _o.hasOwnProperty(_i)) {
						_ro[_i] = codecoke.get.clone(_o[_i]);
					}else{
						_ro.push(_o[_i])
						//ary.slice(0);
					}
				}
			}else if (codecoke.is.Obj(_o)) {
				_ro ={};
				for ( var _i in _o ){if(_o.hasOwnProperty(_i)) {
					if ( typeof(_o[_i]) == 'object')  {
						_ro[_i] = codecoke.get.clone(_o[_i]);
					}else {
						_ro[_i] = _o[_i];
					}
				}}
			}else {
				_ro=_o;

			}
			return _ro;
		}
	}
	;

	/*==================
	//codecoke.query object
	//===============*/
	codecoke._serverQuery = function () {
		this._cookieDefauleSett =['/','d',60];
		this._cookiePathTimeO = {};
		this._cookieDelete_str='H_aDde1ETe';
		this._cookieSetAfter =null;
		this._cookieIsChange=false;
		this._cookieChangeO={};
		this._questSett ={
			'_agent' :{
			'comurl' :'HTTP_REFERER' ,
			'ip' :'REMOTE_ADDR' ,
			'client' :'HTTP_USER_AGENT' ,
			'method' :'Request_Method',
			'ajaxhead':'HTTP_codecoke-client',
			'language' :'Http_Accept_Language'
			},
			'_web' : {
			'file' :'SCRIPT_NAME' ,
			'dir' :'APPL_PHYSICAL_PATH' ,
			'domain' :'SERVER_NAME' ,
			'ip' :'LOCAL_ADDR' ,
			'iisid' :'Instance_ID'
			}
		};
		this.quest ={};
		//this.getQueryString();
		//this.getQueryCookie();
		this._getQueryAgentWebInfo();
	};
	codecoke._serverQuery.prototype._getQueryAgentWebInfo = function() {
		if(!this.quest) {
			this.quest={};
		}
		var _rqsV;
		if(!codecoke.is.Obj(this.quest.web)) {
			this.quest.web={};
			for (var _i in this._questSett._web) {if(this._questSett._web.hasOwnProperty(_i)) {
				_rqsV = codecoke.get.str(Request.ServerVariables(this._questSett._web[_i]),'noblank');
				if(!codecoke.is.Nt(_rqsV)) {this.quest.web[_i] = _rqsV;}
			}}
			this.quest.web.path = this.quest.web.file.replace(/(?!\/)[^\/]*$/,'').toLowerCase();
			this.quest.web.file = this.quest.web.file.match(/(?!\/)[^\/]*$/)[0];

			if(this.quest.web.domain) {
				this.quest.web.domain=(''+this.quest.web.domain).toLowerCase();
				this.quest.web.rootdomain=this.quest.web.domain.match(/(?:(?:[a-z0-9]{1,29}\-[a-z0-9]{1,29}|[a-z0-9]{1,26}\-[a-z0-9]{1,26}\-[a-z0-9]{1,26})|[a-z0-9]{1,32})\.(?:[a-z]{2,3}\.[a-z]{2,3}|[a-z]{2,4})$/)[0];
			}
		}
		_rgsV=null;
		if (!codecoke.is.Obj(this.quest.agent)) {
			this.quest.agent={};
			for (var _i in this._questSett._agent) {if(this._questSett._agent.hasOwnProperty(_i)) {
				switch (true) {
					case ('client'==_i):
						_rqsV = codecoke.get.str(Request.ServerVariables(this._questSett._agent[_i]),'oneblank')
						break;
					case ('language'==_i):
						_rqsV = codecoke.get.str(Request.ServerVariables(this._questSett._agent[_i]),'oneblank','lower')
						break;
					case ('ip'==_i):
						var _ipreg =/((([0-9]{1,3})\.[0-9]{1,3})\.[0-9]{1,3})\.[0-9]{1,3}/;
						var _regArr=(
							(''+Request.ServerVariables('REMOTE_ADDR')).match(_ipreg)
							||
							(''+Request.ServerVariables('HTTP_X_FORWARDED_FOR')).match(_ipreg)
							||
							(''+Request.ServerVariables('HTTP_VIA')).match(_ipreg)
						);
						if(_regArr && _regArr.length && _regArr.length==4) {
							_rqsV=_regArr[0];
							this.quest.agent.ipC=_regArr[1];
							this.quest.agent.ipB=_regArr[2];
							this.quest.agent.ipA=_regArr[2];

						}
						break;
					default:
						_rqsV = codecoke.get.str(Request.ServerVariables(this._questSett._agent[_i]),'noblank','lower');

				}
				if(!codecoke.is.Nt(_rqsV)) {
					this.quest.agent[_i] = _rqsV;
				}
			}}
		}
	}
	;
	codecoke._serverQuery.prototype.getQueryString =function() {
		if(codecoke.is.Nt(this._queryStringObj)) {
			this._queryStringObj={};
			if(Request.QueryString.Count){
				var _qrValue , _qKey;
				for (var i=1,_rql=Request.QueryString.Count; i<=_rql; i++) {
					_qrValue = codecoke.get.str(Request.QueryString(i),'oneblank');
					_qKey =Request.QueryString.key(i);
					if(isNaN(parseInt(_qKey)) && _qrValue){
						_qrValue = unescape(_qrValue);
						if(_qrValue.indexOf('.')>-1) {
							_qrValue=_qrValue.replace(/\.+/g,'.');
						}
						if(_qrValue.indexOf(',')>-1) {
							_qrValue=_qrValue
									.replace(/,\s*|\s*,/g,',')
									.replace(/,{2,}/g,',')
									.replace(/^[,\s]*|[\,\s]*$/g,'');
						}
						this._queryStringObj[_qKey] =''+_qrValue;
					}
				}
			}
		}
	}
	;
	codecoke._serverQuery.prototype.str = function() {
		if(!arguments[0]) {
			return null;
		}
		if(!codecoke.is.Obj(this._queryStringObj)) {
			this.getQueryString();
		}
		var _key = codecoke.get.str(arguments[0],'noblank');
		if(!_key || !this._queryStringObj[_key]){
			return null ;
		}
		return this._queryStringObj[_key];
	}
	;
	codecoke._serverQuery.prototype._getQueryCookieO = function(_reload) {
		if (!codecoke.is.Obj(this._cookieO) || _reload) {
			this._cookieO ={};
			if (Request.cookies.Count>0) {
				var _qK , _qV;
				for (var i=1,_qcl=Request.Cookies.Count; i<=_qcl; i++) {
					_qK =Request.cookies.Key(i);
					_qV = Request.cookies(i);
					if(/^_+ut[a-z]+/i.test(_qK) || codecoke.is.Nt(_qK)) {continue;}
					if(_qV.Count && _qV.Count>0){
						for (var x=1,_qvl=_qV.Count; x<=_qvl; x++) {
							var _qVk =_qV.key(x);
							var _qVv =codecoke.get.str(unescape(_qV(x)),'oneblank');
							if(codecoke.is.Nt(_qVk)) {continue ;}
							if(!codecoke.is.Obj(this._cookieO[_qK])){this._cookieO[_qK]={} ;}
							this._cookieO[_qK][_qVk]= _qVv;
						}
					}else {
						_qV =codecoke.get.str(unescape(_qV),'oneblank');
						if(!_qV){continue;}
						this._cookieO[_qK]=_qV;
					}
				}
			}
		}

	}
	;
	codecoke._serverQuery.prototype.cookie =function(_n,_k) {
		if(!_n ) return null;
		if(!codecoke.is.Obj(this._cookieO)) {
			this._getQueryCookieO();
		}
		_n = codecoke.get.str(_n,'noblank');
		_k = codecoke.get.str(_k,'noblank');
		return(
			(!_n || codecoke.is.Nt(this._cookieO[_n]))
			? null
			:(
				(
					codecoke.is.Obj(this._cookieO[_n])
					? (
						(!_k || codecoke.is.Nt(this._cookieO[_n][_k]) || this._cookieO[_n][_k]==this._cookieDelete_str)
						? null :this._cookieO[_n][_k]
					)
					:(
						(_k || this._cookieO[_n]==this._cookieDelete_str)
						? null : this._cookieO[_n]
					)
				)
			)
		);
	}
	;
	codecoke._serverQuery.prototype.cookiewrite=function() {
		if(!this._cookieIsChange || !codecoke.is.Obj(this._cookieChangeO)) {
			return false;
		}
		if(!codecoke.is.Obj(this._cookieO)) {
			this._getQueryCookieO();
		}
		for (var _n in this._cookieChangeO) {if(this._cookieChangeO.hasOwnProperty(_n)){
			if(!codecoke.is.Nt(this._cookieO[_n])) {
				var _cookiesett= this._cookiePathTimeO && this._cookiePathTimeO[_n] ? this._cookiePathTimeO[_n] :this._cookieDefauleSett;
				if(codecoke.is.Obj(this._cookieO[_n])) {
					var _hasChild=false;
					for (var _k in this._cookieO[_n]) {if(this._cookieO[_n].hasOwnProperty(_k)){
						if(!codecoke.is.Nt(this._cookieO[_n][_k])) {
							if(this._cookieO[_n][_k]===this._cookieDelete_str) {
								delete this._cookieO[_n][_k];
								Response.Cookies(_n)(_k)='';
							}else {
								if(!_hasChild) {_hasChild=true;}
								Response.Cookies(_n)(_k)=escape(this._cookieO[_n][_k]);
							}
						}
					}}
					if(_hasChild) {
						Response.Cookies(_n).path = _cookiesett[0];
						Response.Cookies(_n).Expires=codecoke.get.timeadd((new Date()),_cookiesett[1],_cookiesett[2]).getVarDate();
					}else {
						delete this._cookieO[_n];
						Response.Cookies(_n)='';
						Response.Cookies(_n).path = _cookiesett[0];
						Response.Cookies(_n).Expires=codecoke.get.timeadd((new Date()),'n',-2).getVarDate();

					}
				}else {
					if(this._cookieO[_n]===this._cookieDelete_str) {
						delete this._cookieO[_n];
						Response.Cookies(_n)='';
						Response.Cookies(_n).path = _cookiesett[0];
						Response.Cookies(_n).Expires=codecoke.get.timeadd((new Date()),'n',-2).getVarDate();
					}else{
						Response.Cookies(_n)=escape(this._cookieO[_n]);
						Response.Cookies(_n).path = _cookiesett[0];
						Response.Cookies(_n).Expires=codecoke.get.timeadd((new Date()),_cookiesett[1],_cookiesett[2]).getVarDate();
					}
				}
			}
		}}
		this._cookieChangeO={};
		this._cookieIsChange=false;

	}
	;
	codecoke._serverQuery.prototype.cookiemove=function(_n,_k) {
		var _n =codecoke.get.str(_n,'noblank');
		var _k =codecoke.get.str(_k,'noblank');
		if(!_n) {
			return false;
		}
		if(!codecoke.is.Obj(this._cookieO)) {
			this._getQueryCookieO();
		}
		if (codecoke.is.Nt(this._cookieO[_n])) {
			return false;
		}
		if(codecoke.is.Obj(this._cookieO[_n])) {
			if(!_k) {
				this._cookieO[_n]=''+this._cookieDelete_str;
				if(!this._cookieIsChange) {this._cookieIsChange=true;}
				if(!this._cookieChangeO[_n]) {this._cookieChangeO[_n]=1;}
			}else {
				if(!codecoke.is.Nt(this._cookieO[_n][_k]) && this._cookieO[_n][_k] !==this._cookieDelete_str) {
					this._cookieO[_n][_k]=''+this._cookieDelete_str;
					if(!this._cookieIsChange) {this._cookieIsChange=true;}
					if(!this._cookieChangeO[_n]) {this._cookieChangeO[_n]=1;}
				}
			}
		}else {
			if(!_k && this._cookieO[_n] !==this._cookieDelete_str) {
				this._cookieO[_n]=''+this._cookieDelete_str;
				if(!this._cookieIsChange) {this._cookieIsChange=true;}
				if(!this._cookieChangeO[_n]) {this._cookieChangeO[_n]=1;}
			}
		}

	}
	;
	/*
	[n,v]
	[n,[k,v]]
	[n,[[k1,v1],[k2,v2],[kn,vn]]
	codecoke.query.cookieset([n,[k,v]],['/','d',1])
	*/
	codecoke._serverQuery.prototype.cookieset =function(_nkvArr,_nkvSettArr) {
		if(!_nkvArr || !codecoke.is.Arr(_nkvArr)) {return false;}
		if(!codecoke.is.Obj(this._cookieO)) {this._getQueryCookieO();}
		var _nkvL= _nkvArr.length;
		if(_nkvL<2) {return false;}
		var _n=codecoke.get.str(_nkvArr[0],'noblank');
		if(codecoke.is.Nt(_n)) {return false;}
		var _k,_v,_isChange=false;
		if(codecoke.is.Arr(_nkvArr[1])) {
			var _nkvL1=_nkvArr[1].length;
			if(_nkvL1.length<2) {return false;}
			if(codecoke.is.Arr(_nkvArr[1][0])) {
				for (var _i=0,_z=_nkvL1; _i<_z; _i++) {
					_k=codecoke.get.str(_nkvArr[1][_i][0],'noblank');
					_v=codecoke.get.str(_nkvArr[1][_i][1],'oneblank');
					if(!codecoke.is.Nt(_k) && !codecoke.is.Nt(_v)) {
						if(!codecoke.is.Obj(this._cookieO[_n])) {this._cookieO[_n]={};}
						if(!_isChange) {_isChange=true;}
						this._cookieO[_n][_k]=_v;
					}
				}
			}else {
				_k=codecoke.get.str(_nkvArr[1][0],'noblank');
				_v=codecoke.get.str(_nkvArr[1][1],'oneblank');
				if(!codecoke.is.Nt(_k) && !codecoke.is.Nt(_v)) {
					if(!_isChange) {_isChange=true;}
					if(!codecoke.is.Obj(this._cookieO[_n])) {
						this._cookieO[_n]={};
					}
					this._cookieO[_n][_k]=_v;
				}
			}
		}else {
			_v=codecoke.get.str(_nkvArr[1],'oneblank');
			if(codecoke.is.Nt(_v)) {return false;}
			if(!_isChange) {_isChange=true;}
			this._cookieO[_n]=_v;
		}
		if(_isChange){
			if(!this._cookieIsChange) {this._cookieIsChange=true;}
			if(codecoke.is.Arr(_nkvSettArr)) {this._cookiePathTimeO[_n]=_nkvSettArr;}
			this._cookieChangeO[_n]=1;
		}
	}
	;

	codecoke.query = new codecoke._serverQuery();
	codecoke.quest =codecoke.query.quest;



	//===============applacation============//
	var _appStr =function (){
		this.cacheName='A$';
		//60000 1分钟，3600000 1小时
		this.cacheDefaultOverTime=3600000;
		this.adds ={
			'something' :{fn:'strInMySize',fmax:10}
		};
		this.overTimeKeys ={
			'banSigns':3600000*5
			,'boardCounts':60000*15
			,'boardLastPost':3600000
			,'banBBSpost':3600000
			,'banBBSreplys':3600000*2
		}
	  }
	  ;
	_appStr.prototype={
		'get':function(_k) {
			var _overTime =codecoke.get.n_0(Application(this.cacheName+_k+'$time'));
			if(!_overTime){return null;}
			if( $sev.$runsett.sevtime < _overTime) {
				return codecoke.get.str(Application(this.cacheName+_k),'oneblank');
			}else{
				this.remove(_k);
				return null;
			}
		}
		,'remove':function(_k){
			Application.Lock;
			Application.Contents.Remove(this.cacheName+_k+'$time');
			Application.Contents.Remove(this.cacheName+_k);
			Application.unLock;
		}
		,'clear':function(){
			var x;
			var _e = new Enumerator(Application.Contents);
			for (;!_e.atEnd();_e.moveNext()){
				x = _e.item();
				if(x.indexOf(this.cacheName)> -1 || x.indexOf('$time') >-1){
					Application.Lock;
					Application.Contents.Remove(x+'$time');
					Application.Contents.Remove(x);
					Application.unLock;
				}
			}
		}
		,'set':function(_k,_v,_addtime){
			var _overTime;
			if(_addtime) {
				_overTime= _addtime;
			}else{
				_overTime = this.cacheDefaultOverTime;
				for (var _i in this.overTimeKeys ) {if(this.overTimeKeys.hasOwnProperty(_i) && (_k.indexOf('_'+_i)> -1)) {
					_overTime = this.overTimeKeys[_i]; break;
				}}
			}
			Application.Lock;
			Application(this.cacheName+_k+'$time')= _overTime + $sev.$runsett.sevtime;
			Application(this.cacheName+_k)=_v;
			Application.unLock;
		}
	};
	codecoke.aps = new _appStr();

	/*===========
	//==========*/
	codecoke._adoSQL =function  () {
		this.prType ={
		  'p_bigint':{'n':20,'l':8}
		  ,'p_int':{'n':3,'l':4}
		  ,'p_smallint':{'n':2,'l':2}
		  ,'p_tinyint':{'n':16,'l':1}
		  ,'p_char':{'n':129,'l':38}
		  ,'p_varchar':{'n':200,'l':50}
		  ,'p_nvarchar':{'n':130,'l':50}
		  ,'p_ntxt':{'n':130,'l':255}
		  ,'p_txt':{'n':130,'l':500}
		  ,'p_txts':{'n':203,'l':-1}
		  ,'p_guid':{'n':72,'l':38}
		  ,'p_bit':{'n':11,'l':1}
		  ,'p_datetime':{'n':135,'l':4}
		  ,'p_smalldatetime':{'n':135,'l':2}
		};
	};

	codecoke._adoSQL.prototype={
		'creatConn':function () {
			this.close('conn');
			this.conn= Server.CreateObject('ADODB.Connection');
			if(!this.connStr) {this.connStr=$sett.sevInfo.adoConnStr;}
			this.conn.Open(this.connStr);
		}
		,'creatCmd' : function () {
			this.close('cmd');
			this.cmd= Server.CreateObject('ADODB.Command');
			//this.cmd.CommandType=4;
			this.cmd.NamedParameters = true;
			this.cmd.Prepared=true;
			this.cmd.Parameters.Append(this.cmd.CreateParameter("@RETURNCD",2,4));

		}
		,'close' : function (_ostr) {
			if('conn'==_ostr) {
				if(this.conn && this.conn.State && this.conn.State>0) this.conn.Close();
				this.conn =null;
				return true;
			}else	if('cmd'==_ostr) {
				if(this.cmd && this.cmd.State && this.cmd.State>0) this.cmd.Close();
				this.cmd =null;
				return true;
			}else{
				if(this.conn && this.conn.State && this.conn.State>0) this.conn.Close();
				this.conn =null;
				if(this.cmd && this.cmd.State && this.cmd.State>0) this.cmd.Close();
				this.cmd =null;
				return true;
			}
		}
		,'connExe' : function (_o) {
			if(!codecoke.is.Obj(_o)) return 'err_connExe_arg_must_obj';
			if(!_o.sql) {return 'err_connExe_nees_sqlStr';}
			var _r ='beginConExe';
			if('rowsarr'==_o.type ||  'rowsnexts'==_o.type)
			{
				try {
					this.creatConn();
					var _rcd = this.conn.Execute(_o.sql,1,1)
					if(_rcd.State>0 && !_rcd.EOF) {
						var _gstr = _rcd.GetString(2,-1,'\'\ё\д\'','\'\∴\ф\∵\'','null');
							_gstr=_gstr.substr(0,_gstr.length-5).split('\'\∴\ф\∵\'');
							var _gstrl=_gstr.length;
							for (var _i=0; _i<_gstrl; _i++) {
								_gstr[_i]=_gstr[_i].split('\'\ё\д\'');
							}
						if('rowsarr'==_o.type) {
							_r=_gstr; _rcd.close();
							_rcd=null; _gstr=null;
							this.close('conn');
						}else{
							_r ={	'rsnum':1,'rsarr_0':_gstr}
							var _rcdEOF  = true;
							while (_rcdEOF) {
								_rcd =_rcd.NextRecordset();
								try {
									_gstr = _rcd.GetString(2,-1,'\'\ё\д\'','\'\∴\ф\∵\'','null')
									_r.rsNum ++;
									_gstr=_gstr.substr(0,_gstr.length-5).split('\'\∴\ф\∵\'');
									var _gstrl=_gstr.length;
									for (var _i=0; _i<_gstrl; _i++) {
										_gstr[_i]=_gstr[_i].split('\'\ё\д\'');
									}
									_r['rsarr_'+(_r.rsNum-1)]= _gstr;
									rcdEOF =_rcd.EOF;
								}
								catch (e) {_rcdEOF = false;	e=null;break;}
							}
							this.close('conn');_rcd=null;_gstr =null;
						}

					}else{
						this.close('conn'); _r= '没有记录'
					}

				}
				catch (e) {_r= ''+e.description;}
				finally{this.close('conn');}

				return _r;
			}else{
				try {
					this.creatConn();
					this.conn.Execute(_o.sql,1,128);
					this.close('conn');
					_r= 'ok!!'
				}
				catch (e) {	_r= ''+e.description;}
				finally{this.close('conn');}
				return _r;
			}
			return _r;
		}
		,'addprs' : function (_a) {
			//[prName,prType,pLength,pvalue]
			//[prName,prType,prLen]
			if(!codecoke.is.Arr(_a)) return;
			var _x =_a.length
			for (var i=0; i<_x; i++) {
				var _pr ={};
				if(codecoke.is.Arr(_a[i])) {
					_pr.name =_a[i][0].indexOf('@')== 0 ? _a[i][0] :'@'+_a[i][0];
					_pr.t = this.prType['p_'+_a[i][1]];
					_pr.type =_pr.t.n;
					_pr.len =(_a[i][2] || _pr.t.l);
					_pr.v =codecoke.is.Nt(_a[i][3]) ? null :_a[i][3] ;
					if(!_pr.t ){ continue ;}
					if(codecoke.is.Nt(_pr.v)) {
						this.cmd.Parameters.Append( this.cmd.CreateParameter(_pr.name,_pr.type,2,_pr.len) );
					}else{
						this.cmd.Parameters.Append( this.cmd.CreateParameter(_pr.name,_pr.type,1,_pr.len,_pr.v) );
					}
				}else{
					_pr.name =_a[0].indexOf('@')== 0 ? _a[0] :'@'+_a[0];
					_pr.t = this.prType['p_'+_a[1]];
					_pr.type =_pr.t.n;
					_pr.len =(_a[2] || _pr.t.l);
					_pr.v =codecoke.is.Nt(_a[3]) ? null :_a[3] ;
					if(!_pr.t) return ;
					if(codecoke.is.Nt(_pr.v)) {
						this.cmd.Parameters.Append( this.cmd.CreateParameter(_pr.name,_pr.type,2,_pr.len) );
					}else{
						this.cmd.Parameters.Append( this.cmd.CreateParameter(_pr.name,_pr.type,1,_pr.len,_pr.v) );
					}
					break;
				}
			}
		}
		,'proExe' : function (_prName,_prArrs) {
			this.creatCmd();
			this.cmd.CommandType=4;
			//1 sql 2 table 4 pro
			if(codecoke.is.Arr(_prArrs)) {this.addprs(_prArrs);}
			var _r ;
			if(!this.connStr) {this.connStr=$sett.sevInfo.adoConnStr;}

			try{
				this.cmd.ActiveConnection= this.connStr
				this.cmd.CommandText =_prName;
				this.cmd.Execute();
				if(this.cmd.State>0) this.cmd.Close();
				var _pras = this.cmd.Parameters;
				this.cmd = null;
				//this.close('cmd');
			//this.cmd = null;
				_r={}
				//var _prasN =_pras.count;
				for (var _i=0, _prasN =_pras.count; _i<_prasN; _i++) {
					var _rv  =_pras.item(_i).value;
					if(codecoke.is.Nt(_rv)){continue;}
					var _rn =(''+_pras.item(_i).name).substr(1);
					if('date'==typeof _rv){
						_rv=(new Date(_rv)).getTime();
					}else if ('string'==typeof _rv) {
						_rv=codecoke.get.str(_rv,'oneblank')
					}
					_r[_rn] = _rv;
				}
				//_prasN=null;

			}catch (e){ _r =e.description;}
			finally{ this.close();}
			return _r;
		}
		,'proRowsExe':function (_o) {
			this.creatCmd();
			if(codecoke.is.Arr(_o.prasArr)) {this.addprs(_o.prasArr);}
			var _r;
			if(!this.connStr) {this.connStr=$sett.sevInfo.adoConnStr;}
			try {
				this.cmd.CommandType=4;
				this.cmd.ActiveConnection= this.connStr;
				this.cmd.CommandText =_o.proName;
				if(_o.conntimeout) {
					this.cmd.CommandTimeout=_o.conntimeout
				}
				var _cord = this.cmd.Execute();
				_r={'pras':{}};

				if(_cord.State>0 && !_cord.EOF) {
					var _gstr = _cord.GetString(2,-1,'\'\ё\д\'','\'\∴\ф\∵\'','null');
					_cord.Close();_cord =null;
					_gstr=_gstr.substr(0,_gstr.length-5).split('\'\∴\ф\∵\'');
					var _gstrl=_gstr.length;
					for (var _i=0; _i<_gstrl; _i++) {
						_gstr[_i]=_gstr[_i].split('\'\ё\д\'');
					}
					_r.rowsArr =_gstr;
					_gstr =null;

				}else{
					_cord =null;
				}
				var _pras = this.cmd.Parameters;
				this.cmd =null;
				//var _prasN =_pras.count;
				for (var _i=0,_prasN =_pras.count; _i<_prasN; _i++) {
					var _rv  =_pras.item(_i).value;
					if(codecoke.is.Nt(_rv)) continue;
					var _rn =(''+_pras.item(_i).name).substr(1);
					if('date'==typeof _rv) {
						_rv=(new Date(_rv)).getTime();
					}else if ('string'==typeof _rv) {
						_rv=codecoke.get.str(_rv,'oneblank');
					}
					_r.pras[_rn] = _rv;
				}

			}
			catch (e) {
				_r=e.description;
			}finally{
				this.close();
			}
			return _r;
		}
		,'pageRowsExe' : function (_o) {
			if(!codecoke.is.Obj(_o)) return 'err_pageRowsExe_Arg_MustObj' ;
			if(!codecoke.is.Str(_o.tbName)) return 'err_pageRowsExe_must_tbName';
			if(!codecoke.is.Str(_o.keyField)) return 'err_pageRowsExe_must_keyField';
			var _inarr =[
				['iCount','int',4]
				,['iPageCount','int',4]
				,['tbName','varchar',100,_o.tbName]
				,['keyField','varchar',100,_o.keyField]
			];

			if(_o.tbFields) {
				if(codecoke.is.Arr(_o.tbFields)) {
					 _inarr.push(['tbFields','varchar',1000,_o.tbFields.join(',')])
				}else{
					_inarr.push(['tbFields','varchar',1000,_o.tbFields]);
				}
			}
			if(_o.tbWhere) _inarr.push(['tbWhere','nvarchar',400,_o.tbWhere]);
			if(_o.tbOrder) _inarr.push(['tbOrder','varchar',255,_o.tbOrder]);
			if(_o.indexType) _inarr.push(['indexType','int',4,_o.indexType]);
			if(_o.inCount && _o.inCount >1) _inarr.push(['inCount','int',4,_o.inCount]);
			if(_o.iPageSize) _inarr.push(['iPageSize','int',4,_o.iPageSize]);
			if(_o.iPage) _inarr.push(['iPage','int',4,_o.iPage]);

			this.creatCmd();
			this.addprs(_inarr);
			if(!this.connStr) {this.connStr=$sett.sevInfo.adoConnStr;}

			var _r ;
			try{
				this.cmd.CommandType=4;
				this.cmd.ActiveConnection= this.connStr;
				this.cmd.CommandText ='dbo.prViewPagesByTop';

				var _cord = this.cmd.Execute();
				_r ={};
				if(_cord.State>0 && !_cord.EOF) {
					var _gstr = _cord.GetString(2,-1,'\'\ё\д\'','\'\∴\ф\∵\'','null');
					_cord.Close();_cord =null;
					_gstr=_gstr.substr(0,_gstr.length-5).split('\'\∴\ф\∵\'');
					for (var _i=0,_gstrl=_gstr.length; _i<_gstrl; _i++) {
						_gstr[_i]=_gstr[_i].split('\'\ё\д\'');

					}
					_r.rowArr =_gstr;
					_gstr =null;
					_r.iCount = (this.cmd.Parameters('@iCount')+0);
					_r.iPageCount = (this.cmd.Parameters('@iPageCount')+0);
					_r.iPageSize = _o.iPageSize ? _o.iPageSize : 20
					_r.iPage = _o.iPage ? (this.cmd.Parameters('@iPage')+0) : 1
					if(_r.iPage>_r.iPageCount) _r.iPage=_r.iPageCount;
					this.cmd =null;
				}else {
					_r.iCount = 0;
					_r.iPageCount =0;
					_cord =null;
					this.cmd =null;
				}

			}catch (e){ _r =e.description;}
			finally{ this.close();}
			return _r;

		}
	};
	codecoke.ado = new codecoke._adoSQL();

	/*===========
	 // fsofile
	//==========*/
	var _fileObject =function () {
		this.webRootdir ='/';
		this.fileRootdir =Server.MapPath('/');

	};

	_fileObject.prototype={
		'creatObj':function  (_oname) {
			if(!codecoke.is.Obj(this[_oname])) {
				switch (_oname) {
					case 'fso':
						this.fso =  Server.CreateObject('Scripting.FileSystemObject');
						break
					case 'adostr':
						this.adostr =Server.CreateObject('ADODB.Stream');
						break;

				}
			}
		}
		,'_createAllFolder' : function(_path) {
			if(!_path) {
				return {'err':'need_folder','msg':'createAllFolder'};
			}
			_path = '/'+(_path.replace(/^\/{1,}/,''));
			if(_path.length<2) return {'err':'NotWriteRootFloder','msg':'createAllFolder'};
			var _r={'err':null,'msg':'createAllFolder'};

			try {
				this.creatObj('fso');
				if(this.fso.FolderExists(Server.MapPath(_path))) {
					_r.msg='ok!!'
				}else{
					var _pathArr =_path.substr(1).split('/');
					var _pathN = _pathArr.length;
					if(_pathN<2) {
						this.fso.CreateFolder(Server.MapPath(_path));
						_r.msg='ok!!';
					}else{
						var _pathstr ='';
						for (var _i=0; _i<_pathN; _i++) {
							if(!_pathArr[_i]) {
								continue;
							}else {
								_pathstr+=('/'+_pathArr[_i]);
								if(!this.fso.FolderExists(Server.MapPath(_pathstr))) {
									this.fso.CreateFolder(Server.MapPath(_pathstr));
								}
							}
						}
						_r.msg='ok!!'
					}
				}
			}
			catch (e) {
				_r.err = e.description;
			}
			return _r;

		}
		,'getWebPath' : function(_p) {
				if(!_p) return null ;
				_p =codecoke.get.str( _p,'noblank','lower');
				if(!_p) return null ;
				if(_p.indexOf('.')>-1) {	_p =_p.replace(/\/+[^/]*\.[^\/]*$/,'').replace(/\.+/g,'');}
				if(!_p)  return null;
				_p =_p.replace(/[^\/\_0-9a-z]+/g,'_').replace(/\_+/g,'_');
				if(_p.indexOf('/')>-1){_p= _p.replace(/^\/+/,'').replace(/\/+$/,'').replace(/\/{2,}/g,'/');}
				return _p || null ;
		}
		,'_adostrSaveTxtToFile' : function(_mapPathFile,_txt,_overwrite) {
			//var _inObj = arguments[0];
			//Response.Write(_mapPathFile+'<br/>'+_txt)
			var _overw = _overwrite || 1;
			this.creatObj('adostr');
			this.adostr.type=2;
			this.adostr.mode=3;
			this.adostr.charset='utf-8';
			this.adostr.open;
			this.adostr.WriteText(_txt);
			this.adostr.SaveToFile(_mapPathFile,_overw)
			//this.adostr.close;
			//this.adostr=null;
			//_inObj = null;
			// GetBody = .ResponseBody

		}
		,'readtxt':function(_urlfile) {
			var _r={'err':'Ado_readtxt:'+_urlfile,'msg':null};
			try {
				_urlfile = Server.MapPath(_urlfile);
				this.creatObj('adostr');
				this.adostr.type=2;
				this.adostr.mode=3;
				this.adostr.charset='utf-8';
				this.adostr.open;
				this.adostr.LoadFromFile(_urlfile);
				_r.msg=codecoke.get.str(this.adostr.readtext);
				this.close('adostr');
				_r.err =null;
			}
			catch (e) {
				_r.err='出错：'+e.description;
				this.close('adostr');
				_r.msg=null;
			}

			return _r;

		}
		,'close':function (_o) {
			if('adostr'==_o) {
				if(this.adostr) {
					 if(this.adostr.State>0){ this.adostr.Close();}
					 this.adostr =null;
				}
			}else if('fso'==_o) {
				if(this.fso)  this.fso=null;
			}else{
				if(this.adostr) {
					 if(this.adostr.State>0){ this.adostr.Close();}
					 this.adostr =null;
				}
				if(this.fso)  this.fso=null;
			}
		}
		,'filehas':function (_urlfile) {
			this.creatObj('fso');
			var _r = this.fso.FileExists(Server.MapPath(_urlfile));
			this.close('fso');
			return _r;
		}
		,'trueDelfile':function(_urlfile) {
			if(!_urlfile || _urlfile.indexOf('.')<1 ||_urlfile.length<5 || _urlfile.lastIndexOf('/')==(_urlfile.length-1)) {
				return false;
			}
			this.creatObj('fso');
			try {
				this.fso.DeleteFile(Server.MapPath(_urlfile));
				this.close('fso');

			}catch (e) {
				this.close('fso');
			}

		}
		,'writeTxt':function  (_o) {
			var _fliename = codecoke.get.str(_o.filename,'noblank') , _filetxt =codecoke.get.str(_o.filetxt);
			var _folder =this.getWebPath( _o.folder);
			var _overwrite = _o.overwrite  || 1
			var _r ={'err':null,'msg':'ccc_file_write_begin'};
			if(!_fliename) _r.err='need_file_name';
			if(!_filetxt) _r.err='need_file_content';
			if(!_folder) _r.err='need_file_folder';
			if(_r.err) return _r;

			this.creatObj('fso');
			if(this.fso.FileExists(Server.MapPath('/'+_folder+'/'+_fliename))){
				if(_overwrite==1) {
					_r.err='HasFeileButNotOverWrite';
					this.close('fso')
				}else{
					try {
						this._adostrSaveTxtToFile(Server.MapPath('/'+_folder+'/'+_fliename),_filetxt,2);
						this.close();
						delete _r.err;
						_r.msg='ok!!'
					}
					catch (e) {
						_r.err = e.description
						this.close();
					}
				}
			}else{
				if(this.fso.FolderExists(Server.MapPath('/'+_folder))){
					this._adostrSaveTxtToFile(Server.MapPath('/'+_folder+'/'+_fliename),_filetxt,2);
					this.close();
					delete _r.err;
					_r.msg='ok!!'
				}else{
					_r = this._createAllFolder(_folder);
					if(!_r.err) {
						this.fso=null;
						this._adostrSaveTxtToFile(Server.MapPath('/'+_folder+'/'+_fliename),_filetxt,2);
						this.close('adostr');
						delete _r.err;
						_r.msg='ok!!'
					}
				}
			}
			return _r;
		}
	}
	;
	codecoke.files = new _fileObject();




	codecoke.debug= function (_showObj,_oName) {
		var _apostr =[];
		_oName = _oName ? _oName :'objShow';
		for (var _z in _showObj) {if(_showObj.hasOwnProperty(_z)) {
			_apostr.push('-------------------<br/>'+_z+'<br/>-------------------');
			if(codecoke.is.Arr(_showObj[_z])){
				_apostr.push(_showObj[_z]);
			}else	if(codecoke.is.Obj(_showObj[_z])) {
				var _child =[];
				for (var _y in _showObj[_z]) {
					if(codecoke.is.Obj(_showObj[_z][_y])){

						if(codecoke.is.Arr(_showObj[_z][_y])) {
							_child.push('<br/>#'+_y);
							_child.push(codecoke.get.clone(_showObj[_z][_y]))

						}else if(codecoke.is.Obj(_showObj[_z][_y])){
							_child.push('<br/>#-------'+_y+'----')
							for (var _x in _showObj[_z][_y]) {
								_child.push(' <br/>##'+_x+'<br/>'+JSON.stringify(_showObj[_z][_y][_x]))
							}

						}else{
							_child.push('#'+_y+'：'+JSON.stringify(_showObj[_z][_y]));
						}


					}else{
						_child.push(''+_y+'：'+_showObj[_z][_y]);
					}

				}
				_apostr.push(_child.join('，'))

			}else {
				_apostr.push('  '+_showObj[_z]);
			}

		}}

		Response.Write('<div style="border:1px solid #000;margin:5px;"><p style="background-color:#f5f5f5;text-align:center;">'+_oName+' state</p>'
				+_apostr.join('<br/>')+'<p style="background-color:#f5f5f5;text-align:center;">'+_oName+' end</p></div>');
		_apostr =null;

	};






}


/*var global Object*/

if(!this.$sev) {var $sev={};}
if(!this.$runer) {var $runer={};}



%>