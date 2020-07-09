// let firstName = 'mf';
// let lastName = 'codecoke';
// let year = 1958;

let count =1;

// export default {year};
let contplus =function (_arg1) {
  // body
  count ++;
};

let obj ={
  get v(){
    return count;
  }
  ,puls:contplus
};


export default obj;
// export  {obj };