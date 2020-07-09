
/*codecoke foot default js*/


codecoke._docQuery =function() {
	this.allowCookie = (document.cookie && document.cookie != '')
	if (this.allowCookie) {this.getQueryCookie();}
	
};
codecoke._docQuery.prototype.getQueryCookie = function() {
		var _rqArr = (''+document.cookie).split(/\;\s+/);
		this._cookieObj ={};
		var _X=_rqArr.length;
		for (var _i=0;_i< _X ;_i++ ) {
			var _rqi = _rqArr[_i];			
			if ((0==_rqi.indexOf('__utm')) || (0==_rqi.indexOf('ASPSESSION'))) {continue;}
			var _rk = _rqi.match(/^[^=]+\=/), _rv = _rqi.replace(/^[^=]+\=/,'');
			if (!_rk || codecoke.check.isStrNull(_rv)) {continue;}				
			_rk =unescape(unescape(''+_rk)).replace('=','');			
			//if(codecoke.check.isUndefined(this._cookieObj)) {this._cookieObj={};}			
			if (-1!=_rv.indexOf('=')) {
				if(!codecoke.check.isObject(this._cookieObj[_rk])){this._cookieObj[_rk]={} ;}
				if (-1==_rv.indexOf('&')) {
					var _rvc = _rv.split('=');
					var _rvck =unescape(unescape(_rvc[0]));
					if (!codecoke.check.isStrNull(_rvc[1])) {this._cookieObj[_rk][_rvck]=unescape(unescape(_rvc[1]));}				
				}else {
					var _rvc =_rv.split('&'),_y=_rvc.length;
					for (var _z=0;_z< _y ;_z++ ) {
						if (-1==_rvc[_z].indexOf('=')) {continue;}
						var _rvca = _rvc[_z].split('=');
						var _rvcak =unescape(unescape(_rvca[0]));
						if (!codecoke.check.isStrNull(_rvca[0])) {this._cookieObj[_rk][_rvcak]=unescape(unescape(_rvca[1]));}						
					}				
				}		
			}else {
				this._cookieObj[_rk] = unescape(unescape(_rv));						
			}		
		}
};
codecoke._docQuery.prototype.getCookieValue = function() {
	if(!this.allowCookie || !arguments[0] ) return null;
	var _n = codecoke.get.valueStr(arguments[0],'noblank'), _key = codecoke.get.valueStr(arguments[1],'noblank');
	if (!_n) return null;
	if (codecoke.check.isObject(this._cookieObj[_n])) {
		if(!_key || codecoke.check.isStrNull(this._cookieObj[_n][_key])) return null;
		return this._cookieObj[_n][_key];
	}else {
		return (codecoke.check.isStrNull(this._cookieObj[_n])) ?null : this._cookieObj[_n];
	}
	/*
	if(!_n || codecoke.check.isStrNull(this._cookieObj[_n])) return null;
	if(codecoke.check.isObject(this._cookieObj[_n])) {
		if(!_key || codecoke.check.isStrNull(this._cookieObj[_n][_key])) return null;
		return this._cookieObj[_n][_key];
	}else {
		return this._cookieObj[_n];
	}
	*/
};
codecoke.query = new codecoke._docQuery();
/*
'cookieSet':{
		'pc':{
			'names':'upc',
			'times':['/','n','20']
		},
		'user' :{
			'names':'my',
			'groupName':['sysGroup','vipGroup','adminGroup','editGroup','diggGroup'],
			'times':['/','d','1']
		}
	},
	'cookieGroup':{
		'pc':{
			//'cookiesName':'upc',
			'id':'up',
			'time':'ptt',
			'lockType':'ban',
			'language':'lg'
			//,'set':['/','n','20']
		},
		'user':{
			//'cookiesName':'my',
			'name':'un',
			'key':'uk',
			'hidd':'uh',
			'pm':'im',
			'id':'ui',
			'groups':'ugp',
			'userType':'uTp',
			'lockType':'ban',
			'upTime':'utt'
			//,'set':['/','d','1']
		}
	}
*/
var $user={
		'pc':{},
		'my':{}
	};

$user.pc.load = function() {
	var _cm = $site.sett.cookieGroup;
	var _cst =$site.sett.cookieSet;
	$user.pc.canCookie=false;
	$user.my.canCookie =false;
	$user.pc.id=codecoke.get.guid(codecoke.query.getCookieValue(_cst.pc.names,_cst.pc.id));
	if ($user.pc.id) {
		$user.pc.canCookie=true;
		for ( _i in _cm.pc ){
			if ('id'===_i) {continue;}
			$user.pc[_i]= codecoke.query.getCookieValue(_cst.pc.names,_cm.pc[_i]);
		}
		$user.my.id= codecoke.get.guid(codecoke.query.getCookieValue(_cst.user.names,_cst.user.id));
		//alert($site.sett.cookieSet.user.names);
		if ($user.my.id) {
			$user.my.canCookie = true;
			for ( _n in _cm.user ){
				$user.my[_n]=codecoke.query.getCookieValue(_cst.user.names,_cm.user[_n]);
			}
		}
		
		}
		
	
}

$user.pc.load();

//alert($user.pc.time+'\n'+$user.my.id);

var _ccstr='';
var _cobj =codecoke.query._cookieObj;
for ( _ii in _cobj){
	_ccstr+='<br/><strong>'+_ii+'</strong><br>';
	if(codecoke.check.isObject(_cobj[_ii])) {
		for (var _x in _cobj[_ii] ) {
			_ccstr+=' '+_x+' : '+_cobj[_ii][_x]+'____';

		}
	}else {
		_ccstr+=' : '+_cobj[_ii]+'<br/>';

	}	
}

jQuery(function() {
	codecoke.footPageLoad();
	//codecoke.siteAnalytics();
	//codecoke.siteAnalytics($site.sett.analyticsID2);
	//alert(codecoke.creat.time().getTime())

	$('#headTopNavMaxRight').append(
		'<div id="headUserBar"><a href="#" id="headUserName">'+$user.my.name+'</a><a href="#">短信：'+$user.my.pm+'</a><a href="#" id="headUserMy">我的闲情</a><a href="#" id="headUserSetting">设置</a><a href="#" id="headUserSignOut">退出</a></div>'
	);

	//alert(unescape(''+document.cookie));
	$('#cooot').html('pcLockType(ban) : '+codecoke.query.getCookieValue('upc','ban')+'<br />'+_ccstr+'<hr/>'+document.cookie);

	//isAllowed: document.cookie && document.cookie != '',



});