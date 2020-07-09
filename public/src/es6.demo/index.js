// let firstName = 'mf';
// let lastName = 'codecoke';
// let year = 1958;

let count =1;

// export default {year};
let contplus =function (_arg1) {
  // body
  count ++;
};

let getScriptURL = (function() {
  var scripts = document.querySelector('script[type=module]').src;

  return function() { return scripts; };
})();

// document.currentScript.src
let obj ={
  get v(){
    return document['currentScript'] || document.querySelector('script[type=module]').src;
  }
  ,puls:contplus
  ,getScriptURL:getScriptURL
};


export default obj;
// export  {obj };