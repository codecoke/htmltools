
var eMenu,eItem,eExit,eDesk;

function doMenu(){
eMenu.style.backgroundColor=eDesk.bgcolor;
if ((eItem.offsetLeft+eMenu.offsetWidth-4)<eDesk.offsetWidth) eMenu.style.posLeft=eItem.offsetLeft;
else eMenu.style.posLeft=eDesk.offsetWidth-eMenu.offsetWidth;
eMenu.style.posTop=eDesk.offsetHeight+eDesk.offsetTop;
eMenu.style.visibility='visible';
}

function noMenu(){
if (eMenu && eMenu!=null) {eMenu.style.visibility='hidden';
eMenu.style.posLeft=0;eMenu.style.posTop=0;}
eMenu=eItem=eExit=eDesk=null;
}

function doOver(){
if ("A"==event.srcElement.tagName.toUpperCase()) {
eItem=event.srcElement.parentElement;
eDesk=eItem.parentElement;
eMenu=document.all(eItem.id.replace('item','menu'));
if (eMenu && eMenu!=null) {eMenu.onmouseout=doExit;doMenu();}
else noMenu();}
}

function doExit(){
eExit=event.toElement;
if (eMenu==null || eExit==null) return;
if (!eMenu.contains(eExit) && !eItem.contains(eExit))  noMenu();
}

function doHome(i){
switch (i) {
case 1 : window.external.AddFavorite('http://www.infowe.com',document.title);break;
case 2 : window.external.AddChannel('http://www.infowe.com/index.cdf');break;
default : event.srcElement.style.behavior='url(#default#homepage)';event.srcElement.setHomePage('http://www.infowe.com');break;}
return false;    
}

function doSel(){
var o=event.srcElement;
if ('select'!=o.tagName.toLowerCase()) return;
var s=o.options[o.selectedIndex].value;
o.selectedIndex=0;
if (s!='1') self.location=s;
}

function doWin(l,a,b){
w=window.open(l,'dhtmlet','toolbar=0');
var winx=Math.ceil((window.screen.width-a)/2);
var winy=Math.ceil((window.screen.height-b)/2);
w.resizeTo(a,b);
w.moveTo(winx,winy);
w.focus();
}
function turnnum(m) {
		var o1=document.all('num');
		var o2=document.all('simple_txt');i=parseInt(o1.value);
		if (m!=0) i++; 
		else i--;
	o1.value=i.toString(10);
	eval('o2.style.lineHeight="'+o1.value+'px"')
}