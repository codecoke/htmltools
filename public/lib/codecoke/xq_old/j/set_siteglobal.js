//========
//global const
//========
var $site ={};
var $runer ={};

$site.sett ={
	'analyticsID': 'UA-7548161-1',
	'domain':'1.orz.com',
	'rootDomain' : 'orz.com',
	'allowRootDomainArr' :['icathy.cn','johnnys-net.net','codecoke.com','orz.com','orz.asia'],
	'createTime':'2008-3-18',
	'miibeian':'辽ICP备07501730号',
	'scriptDir':'/codecoke_com/',
	'constDir':'/site_setting/',
	'inApiDir' :'/codecoke_com/insiteapi/',
	'outApiDir' :'/codecoke_com/outSiteApi/',
	'agentDir' :'/codecoke_com/agent/',
	'styleDir':'/istyle/',
	'agentSiteSetJsFileName' :'set_siteglobal',
	'favicon' : '/codecoke_com/agent/i/favicon_j.ico',
	'bakSevHead':'codecoke-sev',
	'sendSevHead':'codecoke-client',
	'siteAdShow':false
	,'cookieSet':{
		'pc':{
			'names':'upc'
			,'id':'up'
			,'times':['/','n','20']
			,'stime':['/','n','20']
		}
		,'my' :{
			'names':'my'
			,'id':'ui'
			,'groupName':['sysGroup','vipGroup','adminGroup','editGroup','diggGroup']
			,'times':['/','d','1']
			,'stime':['/','d','1']
		}
	}
	,'cookieGroup':{
		'pc':{
			'stime':'ptt'
			,'locktype':'ban'
			,'nickname':'ukn'
			,'mail':'mil'
			,'lastsign':'stt'
			,'language':'lg'
		}
		,'my':{
			'stime':'utt'
			,'name':'un'
			,'keyid':'uk'
			,'sysGroup':'syG'
			,'editGroup':'edG'
			,'adminGroup':'adG'
			,'vipGroup':'viG'
			,'joinGroups':'joG'
			,'masterGroups':'mGs'
			,'plusGroups':'pGs'
			,'lockType':'ban'
			,'vipEndDate':'vend'
			,'messages':'pm'
			,'nomail':'nmil'
			,'userType':'uTp'
			,'hidd':'uhi'
			,'groups':'ugp'
		}
	}
};

/*
	'searchFormStr' : '<form method=\"get\" action=\"\/siteSearch\/searchByGG.htm\" target=\"_top\">'
				+'<input type=\"hidden\" name=\"domains\" value=\"johnnys-net.net\"><\/input>'
				+'<label for=\"sbi\" style=\"display: none\">输入您的搜索字词<\/label>'
				+'<input type=\"text\" name=\"q\" size=\"28\" maxlength=\"255\" value=\"\" id=\"sbi\"><\/input>'
				+'<label for=\"sbb\" style=\"display: none\">提交搜索表单<\/label>'
				+'<input type=\"radio\" name=\"sitesearch\" value=\"\" id=\"ss0\"><\/input>'
				+'<label for=\"ss0\" title=\"搜索网络\">网络<\/label>'
				+'<input type=\"radio\" name=\"sitesearch\" value=\"johnnys-net.net\" checked id=\"ss1\"><\/input>'
				+'<label for=\"ss1\" title=\"搜索 johnnys-net.net\">闲情 <\/label>'
				+'<input type=\"submit\" name=\"sa\" value=\"Google 搜索\" id=\"sbb\"><\/input>'
				+'<input type=\"hidden\" name=\"client\" value=\"pub-2586913913994876\"><\/input>'
				+'<input type=\"hidden\" name=\"forid\" value=\"1\"><\/input>'
				+'<input type=\"hidden\" name=\"channel\" value=\"9840727129\"><\/input>'
				+'<input type=\"hidden\" name=\"ie\" value=\"UTF-8\"><\/input>'
				+'<input type=\"hidden\" name=\"oe\" value=\"UTF-8\"><\/input>'
				+'<input type=\"hidden\" name=\"flav\" value=\"0000\"></input>'
				+'<input type=\"hidden\" name=\"sig\" value=\"Jwy2fHZmBqwVIg5J\"><\/input>'
				+'<input type=\"hidden\" name=\"cof\" value=\"GALT:#008000\;GL:1;DIV:#336699\;VLC:663399\;AH:center\;BGC:FFFFFF\;LBGC:336699\;ALC:0000FF\;LC:0000FF\;T:000000\;GFNT:0000FF\;GIMP:0000FF\;FORID:11\"><\/input>'
				+'<input type=\"hidden\" name=\"hl\" value=\"zh-CN\"><\/input><\/form>',
		'searchFormStrM' : '<form method="get" action=\"\/siteSearch\/searchByGG.htm\" target=\"_top\">'
				+'<input type="hidden" name="domains" value="johnnys-net.net"></input>'
				+'<input type="text" name="q" size="31" maxlength="255" value="" id="sbi"></input>'
				+'<input type="radio" name="sitesearch" value="" id="ss0"></input>'
				+'网络'
				+'<input type="radio" name="sitesearch" value="johnnys-net.net" checked id="ss1"></input>'
				+'闲情 '
				+'<input type="submit" name="sa" value="Google 搜索" id="sbb"></input>'
				+'<input type="hidden" name="client" value="pub-4190233654185559"></input>'
				+'<input type="hidden" name="forid" value="1"></input>'
				+'<input type="hidden" name="channel" value="3048030556"></input>'
				+'<input type="hidden" name="ie" value="UTF-8"></input>'
				+'<input type="hidden" name="oe" value="UTF-8"></input>'
				+'<input type="hidden" name="safe" value="active"></input>'
				+'<input type="hidden" name="flav" value="0000"></input>'
				+'<input type="hidden" name="sig" value="pcBNhcxu9K4l9gK1"></input>'
				+'<input type="hidden" name="cof" value="GALT\:#008000\;GL\:1\;DIV\:#FFFFFF\;VLC\:663399\;AH\:center\;BGC\:FFFFFF\;LBGC\:336699\;ALC\:0000FF\;LC\:0000FF\;T\:000000\;GFNT\:0000FF\;GIMP\:0000FF\;FORID\:11"></input>'
				+'<input type="hidden" name="hl" value="zh-CN"></input>'
				+'</form>'
*/

$site.sett.ggSearchSet ={
		'tourl':'\/siteSearch\/searchByGG.htm',
		'domain' : 'johnnys-net.net',
		'gaid':'pub-4190233654185559',
		'channel':'3048030556',
		'sig':'pcBNhcxu9K4l9gK1'	
	}

$runer.doc ={
	'app':{
		'analytics':'http://www.google-analytics.com/ga.js'

	}
}

$runer.doc.searchformStr= '<form method="get" action=\"'+$site.sett.ggSearchSet.tourl+'" target=\"_top\">'
		+'<input type="hidden" name="domains" value="'+$site.sett.ggSearchSet.domain+'"></input>'
		+'<input type="text" name="q" size="31" maxlength="255" value="" id="sbi"></input>'
		+'<input type="radio" name="sitesearch" value="" id="ss0"></input>'
		+'网络'
		+'<input type="radio" name="sitesearch" value="'+$site.sett.ggSearchSet.domain+'" checked id="ss1"></input>'
		+'闲情 '
		+'<input type="submit" name="sa" value="Google 搜索" id="sbb"></input>'
		+'<input type="hidden" name="client" value="'+$site.sett.ggSearchSet.gaid+'"></input>'
		+'<input type="hidden" name="forid" value="1"></input>'
		+'<input type="hidden" name="channel" value="'+$site.sett.ggSearchSet.channel+'"></input>'
		+'<input type="hidden" name="ie" value="UTF-8"></input>'
		+'<input type="hidden" name="oe" value="UTF-8"></input>'
		+'<input type="hidden" name="safe" value="active"></input>'
		+'<input type="hidden" name="flav" value="0000"></input>'
		+'<input type="hidden" name="sig" value="'+$site.sett.ggSearchSet.sig+'"></input>'
		+'<input type="hidden" name="cof" value="GALT\:#008000\;GL\:1\;DIV\:#FFFFFF\;VLC\:663399\;AH\:center\;BGC\:FFFFFF\;LBGC\:336699\;ALC\:0000FF\;LC\:0000FF\;T\:000000\;GFNT\:0000FF\;GIMP\:0000FF\;FORID\:11"></input>'
		+'<input type="hidden" name="hl" value="zh-CN"></input>'
		+'</form>'