requirejs.config({
  baseUrl:'public/lib',
 paths:{
   jquery:[
     'jquery-3.3.1'
     ,'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min'
   ]
   ,etpl:'etpl'
   ,umeditor:'umeditor'
 },
 urlArgs: (id,url) => {
  return (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime();
 }


});