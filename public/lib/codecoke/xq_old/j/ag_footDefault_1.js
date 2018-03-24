
/*codecoke foot default js*/

codecoke._msgBoxShow= function() {
	this._msgPel ={
		'msg_box_head':'iHead',
		'msg_box_foot':'iContent',
		'msg_box_default':'iContent'
	}
	
};
codecoke._msgBoxShow.prototype._getMsgSet = function(_o) {
	var _m = {
		'txt' :null
		,'pcss':null
		,'boxstyle':null
		,'tag':null
		,'ptag':null
		,'ptagID':null
		,'add':true
		,'addclose':true
		,'boxshow':true
		,'boxPID':null
		,'boxcss':null
		,'boxstyle':null
		,'boxID':null
		,'msgtype':'header'
		,'callbak':null
	};	
	
	for ( _i in _o )	 _m[_i]=_o[_i];
	switch (true){
		case ('pap'==_m.msgtype):
			_m.boxPID =_m.boxPID || 'iContent';
			_m.boxID = _m.boxID || 'msg_box_pap';
			_m.boxcss = _m.boxcss || 'msg-box-pap';
			_m.boxstyle = _m.boxstyle || '';
			_m.boxstyle += 'width:'+($runer.doc.width)+'px; height:'+($('body').outerHeight()-218)+'px;';
			_m.ptag = _m.ptag || 'dl';
			_m.addclose = _o.addclose || false;
			_m.pcss = _m.pcss || 'msg-box-pap-con';
			_m.tag = _m.tag || 'dd';
			break;
		case ('pop' ==_m.msgtype):
			_m.boxPID =_m.boxPID || 'iContent';
			_m.boxID = _m.boxID || 'msg_box_pop_content';
			_m.boxcss = _m.boxcss ? ('msg-box-pop '+_m.boxcss) :'msg-box-pop';
			_m.boxshow =_o.boxshow || false;
			_m.boxstyle = _m.boxstyle || 'left:'+($runer.doc.iHead.offset().left+250)+'px;top:'+($runer.doc.iHead.offset().top+190)+'px;';
			_m.ptag = _m.ptag || 'dl';
			_m.pcss = _m.pcss || 'msg-box-pop-con';
			_m.tag = _m.tag || 'dd';
			break;
		case ('header' ==_m.msgtype):
			_m.boxPID =_m.boxPID || 'iHead';
			//_m.boxID = _m.boxID || 'msg_box_header';
			_m.boxcss = _m.boxcss || 'msg-box-header';
			_m.ptag = _m.ptag || 'div';
			_m.pcss = _m.pcss || 'msg-box-header-con';
			_m.tag = _m.tag || 'p';
		break;
		case ('ajaxer' ==_m.msgtype):
			_m.boxPID =_m.boxPID || 'iHead';
			//_m.boxID = _m.boxID || 'msg_box_header';
			_m.boxcss = _m.boxcss || 'msg-box-ajaxer';
			_m.ptag = _m.ptag || 'dl';
			_m.pcss = _m.pcss || 'msg-box-ajaxer-con';
			_m.tag = _m.tag || 'dd';
		break;
		default:
			_m.msgtype='msgunknow';
			_m.boxPID =_m.boxPID || 'iContent';
			//_m.boxID = _m.boxID || 'msg_box_unid';
			_m.boxcss = _m.boxcss || 'msg-box-unid';
			_m.ptag = _m.ptag || 'ul';
			_m.tag = _m.tag || 'li';

	
	}	
	_m.tagEnd = _m.tag.trim().match(/^[a-z]+/i);
	_m.ptagEnd = _m.ptag.trim().match(/^[a-z]+/i);
	_m.ptagID = _m.ptagID ? _m.ptagID : _m.msgtype+'_'+_m.ptagEnd+'_'+$siteInfo.sevTime;
	_m.boxID = _m.boxID || 'msg_box_'+_m.ptagID;
	if (codecoke.check.isString(_m.txt)  ) {
		_m.txt = _m.txt.indexOf('<'+_m.tagEnd) ==0 ? $(_m.txt) : $('<'+_m.tag+'>'+_m.txt+'<\/'+_m.tagEnd+'>');	
	}
	//else {
		
		//if ( _m.msgtype!='ajaxer' &&(_m.tagEnd != _m.txt[0].tagName.toLowerCase())) {
		//	_m.txt =$('<'+_m.tagEnd+'><\/'+_m.tagEnd+'>').append(_m.txt);
		
		//}
	//}

	return _m	
	
};

codecoke._msgBoxShow.prototype._domWrite = function(_o) {
	 if (!codecoke.check.isObject(_o)) {return;}
	 if (!_o.txt) {return;}
	 var _r = this._getMsgSet(_o);
	 
	 var _pel =$('#'+_r.ptagID);
	 var _haspel = (_pel.length>0)
	 var _box =$('#'+_r.boxID);
	 var _ajax =null;

	 if (_r.msgtype=='ajaxer') {
		var _ajax = $('#'+'ajx_'+_r.ptagID);
		if (_ajax.length>0) {
			//_ajax.hide();
			_ajax.append(_r.txt).hide().fadeIn(1000);
		}else{
			_ajax=$('<ul id="ajx_'+_r.ptagID+'" class="msg-ajax-info"></ul>')
			.append(_r.txt)
			.prepend($('<li class="iMsgClose">X<\/li>').bind('click',function() {$(this).parent().fadeOut(1000);}))


		}			
	}
	
	if (_haspel) {				
		if (!_r.add && _r.msgtype !='ajaxer') {
				_pel.empty();
				if (_r.addclose) {
					_pel.prepend($('<'+_r.tagEnd+' class="iMsgClose">X<\/'+_r.tagEnd+'>').bind('click',function() {$(this).parent().hide();}))
				}							
		}

		if (_r.msgtype=='ajaxer') {
			_pel.append(_ajax);
		}else{
			 _pel.append(_r.txt);
		}
		if (_r.boxshow) {_box.show();}

	}else{
		_pel = $('<'+_r.ptag+' id=\"'+_r.ptagID+'\"'+ (_r.pcss? ' class=\"'+_r.pcss+'\"' :'')+'></'+_r.ptagEnd+'>');
		if (_r.addclose && _r.msgtype!='ajaxer') {
				_pel.prepend($('<'+_r.tagEnd+' class="iMsgClose">X<\/'+_r.tagEnd+'>').bind('click',function() {$(this).parent().hide();}))
		}
		if (_r.msgtype=='ajaxer') {
			 _pel.append(_ajax);
		}else{
			 _pel.append(_r.txt);
		}
		
		if (_box.length>0) {
			
	
		}else{
			_r.boxstyle = _r.boxstyle ? ' style="'+_r.boxstyle+'\"' :'';
			_box=$('<div id="'+_r.boxID+'" class="'+_r.boxcss+'"'+_r.boxstyle+'></div>')			
				

			if (_r.msgtype=='pap' || _r.msgtype=='pop') {
				if (!_box.find('.'+ _r.msgtype+'-boxclose').length) {					
					_box.prepend(
						$('<div class="'+ _r.msgtype+'-boxclose">X '+(_r.msgtype=='pap' ? ' 关闭窗口':'')+'</div>').click(function() {_box.hide();})
					)
				}
				if (_r.pcss) {_pel.attr('class',_r.pcss);}				
			
			}

			_box.append(_pel).appendTo($('#'+_r.boxPID));

			if (!_r.boxshow) {_box.hide();}
			if (codecoke.check.isFunction(_r.callbak)) {	_r.callbak.call(_r,_box,_pel,_o.txt);}

		}
	
	
	
	}
	 
	 
	if (_r.msgtype=='pop') {
		//alert(_box.html());
		//alert(_r.boxID);
	
	}

	this.boxclose = function(_e) {
		if (_e) {
			$('#'+_e).hide();
		}else{
			_box.hide();
		}
	}
	this.boxclear = function(_e) {
		if (_e) {
			$('#'+_e).remove();
		}else{
			_box.remove();
		}
	}
	this.boxshow = function() {
		if (_e) {
			$('#'+_e).show();
		}else{
			_box.show();
		}
	}
	
	_r =null;
}

codecoke.msg = new codecoke._msgBoxShow();

codecoke.msg.header =function(_o,_pid) {
	if (codecoke.check.isObject(_o) && !_pid) {
		_o.msgtype ='header';
		this._domWrite(_o)
	}else{
		this._domWrite({
				txt:_o
				,ptagID : _pid
				,ptag :arguments[2]
				,add: (!arguments[3] || 'add' == arguments[3])
				,addclose :(!arguments[4] || 'addclose' ==arguments[4])
				,msgtype:'header'
		});	
	}
}

codecoke.msg.ajaxer =function(_o,_pid) {
	if (codecoke.check.isObject(_o) && !_pid) {
		_o.msgtype ='ajaxer';
		this._domWrite(_o)
	}else{
		this._domWrite({
				txt:_o
				,ptagID : _pid
				,ptag :'ul'
				,tag :arguments[2] ||'li'
				,add: (!arguments[3] || 'add' == arguments[3])
				,addclose :(!arguments[4] || 'addclose' ==arguments[4])
				,msgtype:'ajaxer'
		});	
	}
};
//_txt _ptagID _ptag | _boxID
codecoke.msg.pap =function(_o,_pid) {
	if (codecoke.check.isObject(_o) && !_pid) {
		_o.msgtype ='pap';
		this._domWrite(_o)
	}else{
		this._domWrite({
				txt:_o
				,ptagID : _pid
				,ptag :arguments[2]
				,add :('add'==arguments[3] )
				,addclose :('addclose'==arguments[4])
				,msgtype:'pap'
		});		
	}	
};
codecoke.msg.pap.close=function() {
	$("#msg_box_pap").remove();
};
codecoke.msg.pop =function(_o,_pid,_toid) {
	if (codecoke.check.isObject(_o)) {
		
		if (_o.toid) {

			var _toel=[];

			if (codecoke.check.isObject(_o.toid)) {
				_o.boxID= _o.toid.attr('id') ?_o.toid.attr('id') : 'msg_box';
				_o.boxID +='_pop_content';
				_toel = _o.toid;			
			}else{
				_toel =$('#'+_o.toid);
				_o.boxID =_o.toid+'_pop_content';
			}
			if (!_o.width) {_o.width =200;}

			if (_toel.length) {
				var _top =_toel.offset().top;
				var _left =_toel.offset().left;
				
				switch (_o.ps){
					case 'right':
						_left =	_left+_toel.outerWidth();
						break;
					case 'center':
						//var _width =_toel.outerWidth();						
						_left =(_left-parseInt(_o.width/2))+parseInt(_toel.outerWidth()/2);
						_top =_top+_toel.outerHeight();
						break;
					case 'left':
						_left = _left-_o.width;
					 break;
					 case 'bottomleft':
						 _top = _top+_toel.outerHeight()-1;
					break;
					 default:
						 _top = _top+_toel.outerHeight();
				}				
				_o.boxstyle='width:'+_o.width+'px;left:'+_left+'px;top:'+_top+'px;'			
			
			
		
		
		
		}
		
			
		
		}
		
		_o.msgtype ='pop';
		_o.addclose =false;
		this._domWrite(_o)
	}else{		
		this._domWrite({
				txt:_o
				,ptagID : _pid
				,ptag :arguments[2]
				,add :('add'==arguments[3] )
				,addclose :('addclose'==arguments[4])
				,msgtype:'pop'
		});		
	}	
	
}





codecoke._iform =function() {
	this._checkObj ={
		'user_name':{
			info:'用户名'
			,must:[3,12,'oneblank']
		}
		,'user_name_mail':{
			info:'用户名或邮件'
			,must:[3,20]
			,ck:[['isNameOrMail','长度不符，或邮件格式错误']]
		}
		,'user_name_eng':{
			info:'用户名\[英文\]'
			,must:[6,12]
			,ck:[['isStrEng','密码只能是英文字符']]
		}
		,'pwd':{
			info:'密码'
			,must:[6,12,'noblank']
			,ck:[['isStrEng','密码只能是英文字符']]
		}
		,'mail':{
			info:'邮件'
			,must:[5,30,'noblank']
			,ck:[['isMail','不符合邮件格式']]
		}
		,'txt_255':{
			info:'内容'
			,must:[2,255]
		}
		,'txt_50':{
			info:'标题'
			,must:[2,50]
		}
	};
	this.sColor ={
		bg:{
			normal:'#f7f7f7'
			,good:'#d9ffd9'
			,err:'#f7e6e6'
		}
		,ft:{
			normal:'#afaf87'
			,good:'green'
			,err:'red'
		}
	}
		
};
codecoke._iform.prototype._inputReset =function(_e,_guid) {
			var _the = this;
			var _nm = _e.attr('name');
			var _uri = _e.attr('uri');
			_uri = _uri ? (_the._checkObj[_uri] || null) : null;
			if (_uri) {
				//_id = _id.replace(/^[a-z]{2,4}[\-\_]/i,'')
				if (!_e.attr('id')) {_e.attr('id',_nm+'-'+_guid);	}
				_e.css('background-color',_the.sColor.bg.normal).attr('maxlength',_uri.must[1]);			
				var _lab =_e.prev('label');
				if (_lab.length<1) {	_e.before($('<label for="'+_nm+'-'+_guid+'">'+_uri.info+'</label>'));}		
				var _sup =_e.next('sup');
				if (_sup.length<1) {
						_sup =$('<sup/>');
						_e.after(_sup);				
				}else{
						_sup.empty();
				}			
				var _utxt =_uri.must[0] ? 
						'<i class="cRed">*</i><span>输入'+_uri.info+'：长度大于 '+_uri.must[0]+' 小于 '+_uri.must[1]+' </span>'
						: '<span>输入'+_uri.info+'：长度小于 '+_uri.must[1]+' </span>';
				_sup.css('color',_the.sColor.ft.normal).append($(_utxt));				
				_e.focus(function() {						
						$(this).change(function(){_the._inputValCheck($(this));$(this).unbind('focus');});					
					});
			}	
};
codecoke._iform.prototype._formInputsClick =function(_inputs,_guid,_type) {
	var _the = this;
	if ('rset'==_type) {
		_inputs.each(function() {
			_the._inputReset($(this),_guid);
		});
	}else {
		var _valErr =false;
		_inputs.each(function() {
			_valErr =_the._inputValCheck($(this));
			return  (true == _valErr) ;
		});		
		return _valErr;
	}
}
codecoke._iform.prototype._inputValCheck =function(_e) {
		var _the = this
			,_uriN = _e.attr('uri')
			,_uri = _the._checkObj[_uriN] || null;	
		var _val = _e.val ? _e.val() :null;
		
		if (_val) {			
			if (_uriN=='user_name_mail') {			
				_uri = (_val.indexOf('@')>-1) ?  _the._checkObj['mail']  : _the._checkObj['user_name']
			}
			_val = codecoke.get.valueStr(_e.val(),(_uri.must[2]? _uri.must[2]:'oneblank'));
			_e.val(_val);
		}	
		
		//var _val =(_e.val) ? codecoke.get.valueStr(_e.val(),(_uri.must[2]? _uri.must[2]:'oneblank')) : null;		
		//if (_val) {_e.val(_val);}
		var _valErr = true;		
		if (!_uri.must[0]&&!_val) {return true;}		
		switch (true){
			case !_val : 
				_valErr ='不能为空'	
				break;
			case (_uri.must[0] &&(_val.trueLength() < _uri.must[0])) : 
				_valErr ='太短，大于 '+_uri.must[0]+' 字符才好';
				break;
			case (_val.trueLength() > _uri.must[1]) : 
				_valErr ='太长，小于 '+_uri.must[1]+' 字符才好';	
				break;		
		}		
		if (true===_valErr && _uri.ck) {
			var _X=_uri.ck.length;
			for (var _i=0;_i< _X ;_i++ ) {
				_valErr = (codecoke.check[_uri.ck[_i][0]] && codecoke.check[_uri.ck[_i][0]](_val)) || _uri.ck[_i][1];									
				if (true != _valErr) break;					
			}		
		}		
		var _sup = _e.next('sup');		
		if (_sup.length<1) {
			_sup = $('<sup/>');			
			_e.after(_sup);
		}else{
			_sup.empty();
		}		
		if (true==_valErr) {
			_e.css('background-color',_the.sColor.bg.good);
			_sup.css('color',_the.sColor.ft.good).append('<i>√</i>');
							
		}else{
			_e.css('background-color',_the.sColor.bg.err);
			_sup.css('color',_the.sColor.ft.err).append($('<i>X</i><span>'+_uri.info+_valErr+'</span>'));
		}

		return _valErr;	
};
codecoke._iform.prototype._getFormByID =function(_id) {
	var _the =this, _f={};
		_f.el=$(_id);	
	if (_f.el.length<1) {return;}
	if (!_f.el.is('form')){
		_f.el = $(_f.el.find('form')[0]);
		if (_f.el.length<1) {return;}
	}	
	_f.isAjax = _f.el.hasClass('ajax_Form');
	_f.inputs = _f.el.find('[uri]:input');
	if (_f.inputs.length<1) {
		if (!_f.isAjax) return _f.el;
		_f.inputs =null;		
	}
	if (_f.el.attr('id')) {
		_f.id=_f.el.attr('id')
	
	}else{
		_f.id = 'fm-'+_id.replace('#','')
		_f.el.attr('id',_f.id);
	}
	_f.url = _f.el.attr('action');
	_f.method =_f.el.attr('method') || 'GET';
	
	_f.guid = _f.id.replace(/^[a-z]{2,4}[-\_]/i,'');
	if (_f.isAjax) {
		_f.hid = _f.id;
		if ($('#msg_box_msg_'+_f.guid).length<1) {
			_f.el.after($('<div id="msg_box_msg_'+_f.guid+'"></div>'))
		}
	}
	_f.errMax=10;
	//var _infoEl = $('#msg_box_msg_'+_f.guid)
	
	return _the._setForm(_f);

};
codecoke._iform.prototype._setForm = function(_f) {
	var _the = this;	
	_f.el.find(':submit').remove();
	_f.el.find(':reset').remove();
	

	_f.bar = $('<div class="iformButton">'+(_f.btnlink? _f.btnlink :'')+'</div>');
	_f.btnSubmit =$('<button type="submit" id="btnSub_'+_f.id.replace(/^[a-z]+\-/,'')+'">确定</button>')
	_f.btnReset = $('<button type="reset">重填</button>')
		.click(function() {
		if (_f.inputs) {_the._formInputsClick(_f.inputs,_f.guid,'rset');}
		alert(_f.el.parent().parent().attr('id')+'\n'+_f.el.parent().attr('id'));
		_f.el[0].reset();
		return false;					
		});
	_f.bar.prepend(_f.btnReset).prepend(_f.btnSubmit);
	_f.el.append(_f.bar);
	
	if (_f.inputs) {
			//_the._formInputsClick(_f.inputs,_f.guid,'rset');
			_f.resetInput =function() {
				_the._formInputsClick(_f.inputs,_f.guid,'rset');
				
			}

			_f.resetInput();
		
		}
	
	if (_f.isAjax) {
		_f.el.bind('submit', function(e){	e.preventDefault();});
		_f.btnSubmit.click(function() {
			var _valErr =(true===_the._formInputsClick(_f.inputs,_f.guid));
			if (!_valErr) {return false;}				
			codecoke.ajax.go({
				'url':_f.url
				,'id':_f.guid
				,'hid':_f.hid.replace(/^[a-z]{2,4}[-_]/i,'')
				,'cache':false
				,'type':_f.method
				,'data':_f.el.serializeArray()
				,'error':function(_sevHeadInfo,_errStat) {
					//alert(_errO);
					_errStat = parseInt(_errStat);
					if (!codecoke.check.isNumber(_errStat)) {return false;}
					if (_errStat<379 || _errStat>389 ) {return false;}
					//===
						if (_errStat==388) {
								_f.el.html('<h2>严重错误！</h2>');
								return false;					
						
						}

						var _errEl,_errTxt							
						if (!_sevHeadInfo) {							
							codecoke.msg.ajaxer('错误提示（_'+_errStat+'）：奇怪的表单错误！','msg_'+_f.guid,'li class=\"ajx-err-li\"');
							return true;
						}							
						if (_sevHeadInfo.indexOf('###')>0) {
								_errEl = _sevHeadInfo.split('###')[0];
								_errTxt = _sevHeadInfo.split('###')[1];
								_f.el.find('[name="'+_errEl+'"]').css('background-color','#f7e6e6')
									.next('sup').css('color','red').html(_errTxt);
						}else{
								_errEl =null
								_errTxt = _sevHeadInfo;								
						}							
						codecoke.msg.ajaxer('错误提示（_380）：'+_errTxt,'msg_'+_f.guid,'li class=\"ajx-err-li\"')
						return true;						
					
				}
				,'callbak' :function(_d,_stat,_xhd) {
					//if ('ok!!'===_d) {						
						if (_f.btncall) {_f.btncall(_d,_stat,_xhd,_f);}
					
					
					//}else{
						//alert(_d);
					//}

					

				}
				,'errMax' : _f.errMax							
			})
				
				
				
				/*
				var fields = _f.el.serializeArray();
								$.each( fields, function(i, field){
											//$("#results").append(field.value + " ");
											$('#h12').append(i+' '+field.name+' : '+field.value+' ')
											//alert(i+'\n'+field.name+'\n'+field.value);
				}); 
				*/		
		});	
	}else{			
		_f.btnSubmit.click(function() {
			if (true==_the._formInputsClick(_f.inputs,_f.id)){
				_f.el.submit();
				return true;
			}else{
				return false;
			}
		});
	
}	

//_f.reinput  = _the
		
	
	return _f.el;
};
/*{_o.id,_o.fstr,_o.isAjax,_o.callbak,_o.pid}*/
codecoke._iform.prototype._getFormByObj =function(_o) {
	var _the = this , _f={};
	_f.el = codecoke.check.isObj(_o.fstr) ? _o.fstr : $(_o.fstr);	
	if (_o.id) {
		_f.id=_o.id;
		_f.el.attr('id',_o.id);	
	}else{
		_f.id =_f.el.attr('id');
	}
	if (_o.url) {
		_f.url=_o.url;
		_f.el.attr('action',_o.url);	
	}else{
		_f.url =_f.el.attr('action');
	}
	if (_o.isAjax) {
		_f.isAjax=_o.isAjax;
		if (!_f.el.hasClass('ajax_Form')) {_f.el.addClass('ajax_Form');}	
	}else{
		_f.isAjax =_f.el.hasClass('ajax_Form');
	}
	if (_o.callbak) {_f.btncall=_o.callbak ;}
	if (_o.pid) {_f.pid=_o.pid;}
	if (_o.btnlink) {_f.btnlink =_o.btnlink;}
	
	_f.inputs = _f.el.find('[uri]:input');
	if (_f.inputs.length<1) {
		if (!_f.isAjax) return _f.el;
		_f.inputs =null;		
	}
	
	_f.guid = _f.id.replace(/^[a-z]{2,4}[-\_]/i,'');	
	_f.hid = _o.hid || _f.id;
	_f.errMax = _o.errMax || 5;
	_f.method = _o.method || _f.el.attr('method') || 'GET';
	
	return _the._setForm(_f);	
};
codecoke._iform.prototype.go =function(_o) {
	var _the = this;
	if (codecoke.check.isStr(_o)) {
		_o = _o.indexOf('#')==0 ? _o :'#'+_o;
		return _the._getFormByID(_o);
	}
	if (codecoke.check.isObj(_o)) {
		return _the._getFormByObj(_o);	
	}
};
codecoke.iform = new codecoke._iform();


//=========ajax==============

codecoke._ajax = function() {
	this.ajaxID =null;
	this.ajaxErrMax=15;
	this.ajaxErrCount =0;
	this.ajaxErrInfo = {
		'_timout':'服务超时，请稍候尝试'
		,'_busy':'与服务器数据通信中，请耐心等候，或者3分钟后再试！'
		,'_unknow':'未知错误!'
		,'_noHead':'服务器端未返回错误信息！'
		,'_noarg':'没有提供请求参数！'
		,'_404' :'请求地址错误!'
		,'_500' :'服务器端脚本错误，请检查请求地址!'
		,'_395' :'你的浏览器不支持cookie，请求被取消!'
		,'_394' :'server can\'t find ajaxID from head!'
		,'_388':'尝试超过太多次数，拒绝请求，先做点别的吧！'
	}
};
codecoke._ajax.prototype.getAjaxArg = function(_o,_a) {
	var _this =this;
	var _av ={
		'url':_o.url
		,'async':(codecoke.check.isBoolean(_o.async) ? _o.async : true)
		,'type':(_o.type ? _o.type : 'GET')
		,'cache':(codecoke.check.isBoolean(_o.cache) ? _o.cache : true)
		,'error' : function (_xhr,_err) {
				var _sevHeadInfo = _xhr.getResponseHeader($siteInfo.bakSevHead);
				_sevHeadInfo = _sevHeadInfo ? unescape(_sevHeadInfo) : 'not find sevHeadInfo';
				var _errStat = _xhr.status || _err;
				if (!_o.error || !_o.error(_sevHeadInfo,_errStat)) {
						//alert(_sevHeadInfo);
						(_this.ajaxErrInfo['_'+_errStat]) ? 	_this.errShow('_'+_errStat)  : _this.errShow('_unknow');
				}
				if (_errStat !='busy') _this.ajaxID =null;
		}
		,'beforeSend':function(_xhr) {
				_xhr.setRequestHeader($siteInfo.sendSevHead, (_o.hid || _o.id));
				if (_o.before) {_o.before(_xhr)	}
		}
		,'success': function (_d, _stat,_xhr) {
				var _sevHeadInfo = _xhr.getResponseHeader($siteInfo.bakSevHead);
				_sevHeadInfo = _sevHeadInfo ? unescape(_sevHeadInfo) :'not find sevHeadInfo';
				if (_o.callbak) {
						if (_o.callbak(_d,_stat,_sevHeadInfo)) {
							$('#ajx_msg_'+_this.ajaxID).hide();
						}
					//if (false!=(_o.callbak(_d,_stat,_sevHeadInfo))){
					//	$('#ajx_msg_'+_this.ajaxID).hide();
					//}		
				}else{
					$('#ajx_msg_'+_this.ajaxID).hide();

				}
				_xhr.abort();
				_xhr=null;
			_this.ajaxID=null;
		}
		
	};
	if (_o.data) {_av.data = _o.data;}
	if (codecoke.check.isObject(_a)) {for ( _i in _a ){_av[_i] = _a[_i];}}
	return _av;
		
	
};
codecoke._ajax.prototype.errShow =function(_err) {
	if (codecoke.check.isString(_err) && this.ajaxErrInfo[_err]) {
		if (_err=='_busy') {
			var _live = $('#ajx_live_'+this.ajaxID);
			if (_live.length>0) {
				_live.empty().append('错误提示（'+_err+'）：'+this.ajaxErrInfo[_err])
			}else{
				codecoke.msg.ajaxer('错误提示（'+_err+'）：'+this.ajaxErrInfo[_err],'msg_'+this.ajaxID,'li id=\"ajx_live_'+this.ajaxID+'\"');
			}
		}else{
			codecoke.msg.ajaxer('错误提示（'+_err+'）：'+this.ajaxErrInfo[_err],'msg_'+this.ajaxID,'li class=\"ajx-err-li\"');
		}
	}
};


codecoke._ajax.prototype.go =function(_o,_a) {
	if (!_o || !_o.id || !_o.url) {
		alert('ajaxRun_notFind_arg');	
		return false;		
	}	
	var _aErr={};	
	_aErr.eMax = (_o.errMax || this.ajaxErrMax)-1;
	_aErr.el = $('#ajx_msg_'+_o.id);	
	if (_aErr.el.length<1) {
		_aErr.el=null;
		_aErr.errCount =0;
		_aErr.liveEl =null;
	}else{
		_aErr.errCount =_aErr.el.find('li.ajx-err-li').length;
		_aErr.liveEl =$('#ajx_live_'+_o.id);
		if (_aErr.liveEl.length<1) {_aErr.liveEl =null;}	
	}
	
	_aErr.count = _aErr.eMax-_aErr.errCount;

	if (_aErr.count<1) {		
		if (_aErr.liveEl) {
			_aErr.liveEl.css('color','red').empty().append('错误提示（_Max）：尝试超过'+(_aErr.eMax+1)+'次，请15分钟后再试，做点别的吧');
			_aErr.el.show();
		}else{
			codecoke.msg.ajaxer('错误提示（_Max）：尝试超过'+_aErr.eMax+'次','msg_'+_o.id,'li id=\"ajx_live_'+_o.id+'\"','add','addclose');
		}		
		return false;
	}	
	
	if (this.ajaxID) {	this.errShow('_busy');return false;	}
	
	var _this =  this;
	_this.ajaxID = _o.id;

	if (_aErr.liveEl) {
		_aErr.liveEl.empty().append('提交数据...t_'+_aErr.count);
		_aErr.el.show();
	}else{	
		codecoke.msg.ajaxer('提交数据...t_'+_aErr.count,'msg_'+_o.id,'li id=\"ajx_live_'+_o.id+'\"','add','addclose');
	}
	_aErr =null;
	var _av = _this.getAjaxArg(_o,_a);
	$.ajax(_av);

}
codecoke.ajax = new codecoke._ajax();

//$siteInfo.inApiDir

codecoke.userGetSignOut =function() {
			//var _myAjaxid =$user.pc.id;
			codecoke.ajax.go({
				'url':'/f/johnnys/signOut_1.asp'
				,'id':$user.my.id
				,'cache':false
				,'callbak' :function(_d,_stat,_xhd) {	
					//$('#msg_'+$user.my.id).remove();
					$.getScript(
						'/f/johnnys/getfiles.asp?ft=json&f=classinfo'
						,codecoke.userTopBarLoad
					)
					return true;
				}								
			});							
};
codecoke.guestGetSignOut =function() {
			codecoke.ajax.go({
				'url':'/f/johnnys/signOut_1.asp'
				,'id':$user.pc.id
				,'cache':false
				,'callbak' :function(_d,_stat,_xhd) {	
					//$('#msg_'+$user.pc.id).remove();
					$.getScript(
						'/f/johnnys/getfiles.asp?ft=json&f=classinfo'
						,codecoke.userTopBarLoad
					)
					return true;
				}								
			});							
};	



codecoke.userGetSignIn =function() {					
			if ($('.formm4sign').length) {
				$('#msg_box_pap').show();
				alert($('#msg_box_pap').html());
				return true;
			}

			codecoke.ajax.go({
				url:$site.sett.inApiDir+'action/sign/?ac=signF'
				,id:$user.pc.id
				,cache:false
				,callbak :function(_d,_stat,_xhd) {	
					codecoke.msg.pap({
						'txt':codecoke.iform.go({
							'id':'fm-'+_xhd
							,'fstr':_d
							,'isAjax':true
							//,'hid':_xhd
							,'url':$site.sett.inApiDir+'action/sign/?ac=signD'
							,'btnlink':'<a href="#">忘记密码？</a><a href="#">注册</a>'
							,'errMax':15
							,'callbak':function(_d,_stat,_xhd,_f) {
								switch (true){
									case (_d=='err_usernotfind'):
										_f.resetInput();
										codecoke.msg.ajaxer('错误提示（server_'+_d+'）：用户名密码错误,请重新输入__'+_f.guid,'msg_'+_f.guid,'li class=\"ajx-err-li\"');
										//codecoke.msg.ajaxer({
										//	'boxID':''
										//})
										//alert($('#msg_'+_xhd).html())

										break;
									case (_d =='err_mailneedcheck'):
										$('#msg_'+_f.guid).html('<div>'
										+'<h2 class="txtC cGreen">成功登录，下一步：</h2>'
										+'<p>你的没有登记邮箱，或者您的邮箱未经过认证，你将不能使用发帖、回复、短信等绝大多数功能。</p>'
										+'<p>15天内未认证邮箱的账户将被锁定或删除</p>'
										+'<p>所谓 “<strong>邮箱认证</strong>” 就是我们会发一份邮件给你,以确认你登记的邮箱有效</p>'
										+'<p>旧版马甲还没认证邮箱的抓紧哦，以后只通过邮件登录。</p>'
										+'<p>现在就认证邮箱：→ <a href="#" class="cRed">激活我的帐户邮箱</a></p>'
										+'</div>');
										codecoke.userTopBarLoad();
										//codecoke.msg.ajaxer(''
										break;
									case (_d=='ok!!'):
										_f.el.parents('#msg_box_pap').remove();
										codecoke.userTopBarLoad();
										break;
									default:
										alert(_d);
								
								}
								
								
								
								//
								
								
								//
							}									
						})
						,'add':true									
						,'ptag' : 'dl  style=\"width:600px;\"'
						,'ptagID':'msg_'+_xhd								
					});
					return true;
				}						
					
			});				
					
};
	
	codecoke.userBarInfoWrite =function() {
			if ($user.my.keyid) {		
				var _bartxt =['<p class="lihead">我的级别</p>'];
				
				if ($user.my.groups.site && $siteInfo.groups.site['g_'+$user.my.groups.site]) {
					_bartxt.push('现在级别：<strong>'+$siteInfo.groups.site['g_'+$user.my.groups.site].name+'</strong>  <sup>'+$user.my.groups.site+'</sup>');
					if ( $siteInfo.groups.site['g_'+($user.my.groups.site+1)]) {
						_bartxt.push('下一级别：<strong>'+$siteInfo.groups.site['g_'+($user.my.groups.site+1)].name+'</strong> <sup>'+($user.my.groups.site+1)+'</sup>');			
					}
				}
				if ($user.my.groups.admin && $siteInfo.groups.admin['g_'+$user.my.groups.admin]) {
					_bartxt.push('管理组别：<strong>'+$siteInfo.groups.admin['g_'+$user.my.groups.admin].name+'</strong>  <sup>'+$user.my.groups.admin+'</sup>')
				}
				
				_bartxt.push('<p class="lihead">我的统计</p>');
				
				var _ucount ='';
				var _uii =0
				for ( _y in $user.my.counts ){
						_uii++;
						_ucount+=$siteInfo.userCountsTxt[_y]+':&nbsp;<strong>'+$user.my.counts[_y]+'</strong>&nbsp;&nbsp;';
						if (_uii%2==0) {_ucount+='<br/>';}
					//_bartxt.push($siteInfo.userCountsTxt[_y]+':'+$user.my.counts[_y]);
				}
				_bartxt=_bartxt.concat([_ucount,'<p class="lihead">登录状况</p>'])
				if ($user.my.lastSignTime) {
					_bartxt.push('上次登录：'+codecoke.get.time($user.my.lastSignTime).toLocaleString());		
				}
				if ($user.pc.nickname) {
					_bartxt.push('昵称：'+$user.pc.nickname);
				}
				if ($user.my.nomail) {
					_bartxt.push('邮箱：您没有验证邮箱，只能使用基本功能！<br/><a href="#">点这里验证邮箱！</a>');
				}
				_bartxt.push('<a href="#">退出登录</a> <a href="#">重登录</a>')
				
				var _barConAll ='<div id="barinfo_menu" class="acMenu" uri="barinfo_content">'
					+'<span class="acNormal acNow">我的资料</span><span class="acNormal">小组</span>'
					+'<span class="acNormal">好友</span><span class="acNormal">收藏</span>'
					+'</div>'
					+'<div id="barinfo_content">'
					+'<ul id="barinfo_group" class="acContent">'
					+'<li>'+_bartxt.join('</li><li>')+'</li>'
					+'<li>&nbsp;</li>'
					+'</ul>'
					+'</div>';				
				if ($('#barinfo_conAll').length>0) {
					$('#barinfo_conAll').empty().append('<dd>'+_barConAll+'</dd>');	
					$('#barinfo').mouseenter(function() {$('#barinfo_conAll').parent().show();});
				}else{
					codecoke.msg.pop({
					'toid':$('#topUserBar')
					,'ptagID':'barinfo_conAll'
					,'boxPID':'topUserBar'
					,'width':258
					,'ps':'bottomleft'
					,'callbak':function(_box,_pel,_txtel) {	
							$('#barinfo').mouseenter(function() {
								_box.show();
								//$('#topUserBar')
							})
					}
					,'txt':_barConAll
				
					})
				}
		}else{
				if ($('#barinfo_conAll').length>0) {
					$('#barinfo_conAll').empty().append('<dd><ul><li><p class="lihead">系统提示</p></li><li>您已经退出啦！</li></ul></dd>');
					$('#barinfo').mouseover(function() {$('#barinfo_conAll').parent().show();})
					alert($('#barinfo_conAll').parent().html())
				}else{
					codecoke.msg.pop({
					'toid':$('#topUserBar')
					,'ptagID':'barinfo_conAll'
					,'boxPID':'topUserBar'
					,'width':258
					,'ps':'bottomleft'
					,'callbak':function(_box,_pel,_txtel) {	
							$('#barinfo').mouseover(function() {_box.show();})
					}
					,'txt':'<ul><li><p class="lihead">系统提示</p></li><li>您已经退出啦！</li></ul>'
				
					})
				}
		
		}
		
	}
	
	
	codecoke.userTopBarLoad = function() {
		//$user._pcLoad();
		//alert($user.pc.id);
		if (!window['$user']) {return;}
		var _topbar = $('#topUserBar');
		if (_topbar.length>0) {
			_topbar.empty();			
		}else {
			_topbar=$('<div id="topUserBar"></div>');
		}
		//alert($user.my.canCookie);
		
		if ($user.my.keyid) {
				var _userBarInfo =($user.pc.mail) ? $user.pc.mail : 'Not Check Mail' ;

				if (!$user.my.nomail) {
					_userBarInfo='<i class="msg_0">!</i>'+_userBarInfo				
				}else{
					_userBarInfo ='<i class="msg_'+$user.my.nomail+'">!</i>'+_userBarInfo
				}

				_userBarInfo ='<dd id="barinfo" class="barinfo" ><a href="#" id="topUserMy">我的闲情</a>'+_userBarInfo+'</dd>';
				//alert()
				var _userBarName='';
				
				if ($user.my.face) {
						_userBarName = '<blockquote class="userBarFace" style="background-image:url('+$user.my.face+')\;"><a href="/u/my/">&nbsp;</a></blockquote>'
				}
				_userBarName +='<dl class="userBarName"><dt><i>A</i><i>E</i><i>V</i><i>M</i><i>S</i><a href="#" class="uName" id="topUserName">'+$user.my.name+'</a>'+$user.pc.nickname+'</dt>'
				+_userBarInfo
				+'</dl>';

				//alert(_userBarName);
				
				var _userBarAc =$('<div class="userBarAc"></div>')

				if ($user.my.messages>0) {

					_userBarAc.prepend('<a href="#" class="topUserMail-new">新消息<strong>'+$user.my.messages+'</strong></a>')
				
				}else{
					_userBarAc.prepend('<a href="#" class="topUserMail-old">收件箱</a>')

				}
				
				_userBarAc.append(
					$('<a href="javascript:void(0);" id="topUserSignOut">退出</a>')
						.bind('click',codecoke.userGetSignOut)
				)				
				_topbar.prepend(_userBarName).append(_userBarAc).prependTo($('#headTopNav'));
					codecoke.userBarInfoWrite();

		}else{
			
			if($user.pc.id) {			 
				 var _guestBarName =$('<dl class="guestBarName">'
					+'<dt><i>Guest</i>'+($user.pc.nickname ? $user.pc.nickname :'it\'s so funny!' )+'</dt>'
					+'</dl>');

				if ($user.pc.mail || $user.pc.nickname) {
					_guestBarName.append(
						$('<dd id="barinfo" class="barinfo">'+($user.pc.mail ? $user.pc.mail :'')+'</dd>').prepend(
							$('<span class="guestOut">← 这不是我，清除!</span>').click(codecoke.guestGetSignOut)
						)
					)			
				}else{
					_guestBarName.append('<dd id="barinfo" class="barinfo"><i>\+\</i></dd>')
				}


				var _guestBarAc=$('<div class="guestBarAc"></div>')

					_guestBarAc.prepend(
						$('<a href="javascript:void(0);" id ="topUserSignIn3">登录</a>')
						.bind('click',codecoke.userGetSignIn)
					).append('<a href="#">注册</a><a href="#">找回密码</a>')
						
					_topbar.prepend(_guestBarName).append(_guestBarAc).prependTo($('#headTopNav'));			 
			 		codecoke.userBarInfoWrite();

			}else {				
				_topbar.append('<div class="guestBarAc"><a href="#">网站地图</a><a href="#">使用帮助</a><a href="">了解闲情</a></div>').prependTo($('#headTopNav'));
				codecoke.msg.header('<li class="header-error">拍肩膀，你家浏览器或防火墙禁用了Cookie，除了到处看看，你啥也干不了啦 <a href="#">查看帮助？</a></li>');
			}

			

		}
		//codecoke.userBarInfoWrite();
	
	};

//===jquery do===
jQuery(function() {
	//$runer.ajaxID = null;
	$runer.doc.footNav = $('#footNav');
	$runer.doc.width = $runer.doc.footNav.outerWidth();
	$runer.doc.iHead=$('#iHead');
	$('#tHead').append($runer.doc.iHead);
	$runer.doc.iHeadFoot =$('#headFoot')
	$runer.doc.iHeadFoot.prepend('<div class="headSearch">'+$sett.site.searchFormStrM+'</div>'			
	).prepend($('<sup class="iR">↓Foot</sup>').bind('click',function() {$(window).scrollTop(99999);}))
	$runer.doc.iHead.show();
	$runer.doc.footNav.prepend(	$('<sup class="iR">↑Top</sup>').bind('click',function() {$(window).scrollTop(0);}))
	.find('ul').append($('<li id="addFavorite">\[+\] 收藏本页</li>').bind('click',function() {window.external.AddFavorite(window.location.href.toString(),'xq');}));
	$('#copyrightUrl').before('-'+((new Date()).getYear()).toString());

	//alert($class.classMyID);
	//alert($user.pc.id);
		
	codecoke.userTopBarLoad();
	
	//codecoke.userTopBarLoad();

	
	
	//codecoke.iform.get('#myFormtest')
	//alert(unescape(''+document.cookie));
	$('#cooot').html('<hr/>'+document.cookie+'<br/>');

	//isAllowed: document.cookie && document.cookie != '',



});