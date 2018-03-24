


requirejs(['../lib/codecoke/codecoke.1'],() => (require(['codecoke'],function (codecoke) {

  console.log(codecoke)
  



  require(['editor'],function (editor) {
    //console.log(window.t22)
    // console.log(editor)
    //console.log(typeof wangEditor)
    // $('#div2').append('<span> add span 21</span>')
    console.log(editor());
    
    var editor2 = new window.wangEditor('#div2')
    editor2.create()
  })
  

})))