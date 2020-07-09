requirejs.config({
   baseUrl:'public/lib',
  paths:{
    jquery:[
      'jquery-3.3.1'
      ,'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min'
    ]
    ,etpl:'etpl'
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


// requirejs(['jquery'],function ($) {
//   //alert(1);
//   $('#req1').append('<br><span>req 1 in jquery1</span>')
// });


// requirejs(['jquery'],function ($) {
//   //alert(1);
//   $('#req1').append('<br><span>req 2 in jquery1</span>')
// });


//alert(2);