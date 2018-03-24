requirejs.config({
  baseUrl:'public/lib',
  paths:{
    jquery:[
      'jquery-3.3.1'
      //,'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min'
    ]
  },
  urlArgs: (id,url) => {
   return (url.indexOf('?') === -1 ? '?' : '&') +'bust=' +id+'_'+  (new Date()).getTime();
  }

/*   urlArgs: function(id, url) {
    var args = 'v=1';
    if (url.indexOf('view.html') !== -1) {
        args = 'v=2'
    }

    return (url.indexOf('?') === -1 ? '?' : '&') 
      + args +'&bust=' +  (new Date()).getTime()
    ;
} */
});