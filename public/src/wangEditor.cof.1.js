


(function(_window,_moduleName = 'codecoke'){
  let _COC = {}

  _COC.canDefine = (defName) => ( 
    defName && typeof define === 'function' && define.amd 
        && typeof requirejs ==='function' && requirejs.specified
        && !requirejs.specified(defName)
  )

  if (! _COC.canDefine(_moduleName)){
    return _window[''+_moduleName+'']
  }


  _COC.version ='1.0.0'
  _COC.author='w@'+_moduleName+'.com'
  define( _moduleName, [], function() {return _COC})
  _window[''+_moduleName+'']= _COC      
  return _COC
})(window)