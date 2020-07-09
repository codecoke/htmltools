

require(['./codecoke.1'],()=>{
  'use strict';
  console.log(codecoke);

  require(['codecoke','jquery','codecoke2'],(codecoke,$,codecoke2)=> {
      //console.log(codecoke2);
      //console.log(requirejs.specified('codecoke'));
      //console.log(requirejs.specified('codecoke2'));
      //console.log(requirejs.specified('codecoke3'));
      $('#t1').text('hi amd')
    
})
  
  //   require(['codecoke'],(codecoke)=>{
      
  //      console.log(codecoke);
  // });

  // require(['codecoke2'],function (codecoke2) {
  //   console.log(codecoke2);
  // })
  
  //console.log(requirejs.specified('codecoke3'));
  //console.log(requirejs.toUrl('./../codecoke'));
  
});