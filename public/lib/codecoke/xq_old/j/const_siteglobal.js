//========
//global const
//========
var $site ={};
var $runer ={};

$site.sett ={
	'analyticsID': 'UA-7548161-1',
	'analyticsID2': 'UA-1613130-9',
	'domain':'1.orz.com',
	'rootDomain' : 'orz.com',
	'allowRootDomainArr' :['icathy.cn','johnnys-net.net','codecoke.com','orz.com','orz.asia'],
	'createTime':'2008-3-18',
	'miibeian':'辽ICP备07501730号',
	'inApiDir' :'/codecoke_com/inSiteApi/',
	'outApiDir' :'/codecoke_com/outSiteApi/',
	'agentDir' :'/codecoke_com/agent/',
	'styleDir':'/istyle/',
	'favicon' : '/codecoke_com/agent/i/favicon_j.ico',
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
};


$runer.doc ={
	'app':{
		'analytics':'http://www.google-analytics.com/ga.js'

	}
}