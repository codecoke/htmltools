// import * as emojiArr from '../../lib/codecoke/emoji/emoji.slim.arr.1.2.js';
import { $ }  from '../../lib/codecoke/core/codecoke.core.1.js';
import { emoji_arr,char } from '../../lib/codecoke/emoji/emoji.slim.arr.1.3.js';



// let name_arr = getNamesArr(emoji_arr);

let emoji_arr_len = emoji_arr.length
  ,int_moji_set = new Set()
  ,int_rep_set = new Set()
  ,int_moji_arr = emoji_arr.map((v) => {
    let vi =v[1][1];
    if(int_moji_set.has(vi))int_rep_set.add(vi);
    int_moji_set.add(vi);
    return vi;
  })
  ,int_only_arr = [...int_moji_set]
  ,no_rep_arr =[]
  ,rep_arr =[]
  ,err_arr =[]
;


for (let i = 0; i < emoji_arr_len; i++) {
  let vi= emoji_arr[i][1][1]
    ,vname = emoji_arr[i][0].toLowerCase()
    ,vf = emoji_arr[i][1][0]
    ,vcode
  ;

  if ('number' !== typeof vi){
    err_arr[err_arr.length]=[vname,' ',vf ];
    continue;
  }

  vcode = emoji_arr[i][1][2].toUpperCase();
  vf =String.fromCodePoint('0x'+vcode);
  // emoji_arr[i][1][2] = emoji_arr[i][1][2].toUpperCase();
  // console.log(emoji_arr[i][1][2]);
  if(int_rep_set.has(vi)){
    // rep_arr[rep_arr.length] = [vname,vcode];
    rep_arr.push(...[vname,vcode,vf]);
  }else{
    // no_rep_arr[no_rep_arr.length]= [vname,[vf,vi,vcode]];
    no_rep_arr.push(vname,vcode,vf);
  }
}

let erp_len = rep_arr.length
  ,new_rep_arr =[]
;
for ( let i=1; i<erp_len; i=i+3 ) {
  let _name = rep_arr[i-1].trim()
    ,_code =rep_arr[i]
  ;

  let left_i = new_rep_arr.indexOf(_code);

  if (left_i !=-1 ){
    // new_rep_arr[i-1] += _name;
    // console.log(new_rep_arr[left_i-1]);
    if(!/[0-9]+$/i.test(_name)){
      new_rep_arr[left_i-1] +=  ','+ _name.substring(_name.indexOf(':')+1);
      // new_rep_arr[left_i+1]= ''+String.fromCodePoint('0x'+_code)+'';
    }
  }else{
    new_rep_arr.push(_name,_code,String.fromCodePoint('0x'+_code));
  }

  // let right_i = rep_arr.lastIndexOf(_name);
}
// console.log(/[0-9]+/g.test('0123'));

console.log(
  'emoji_arr_len:'+emoji_arr_len
  // +'\n name_moji_arr:'+name_moji_arr.length
  +'\n int_moji_arr:'+int_moji_arr.length
  +'\n int_only_moji_arr:'+int_only_arr.length

  +'\n rep_arr:'+ rep_arr.length
  +'\n new_rep_arr:'+ new_rep_arr.length/3
  +'\n no_rep_arr:'+ no_rep_arr.length/3
  +'\n int_rep_set:'+int_rep_set.size
  // +'\n name_rep_set:'+name_rep_set.size
);

console.log(typeof window.HTMLCollection);
$('t1').value = char.stringify(rep_arr);
$('t2').value = JSON.stringify(new_rep_arr,' ',0).replace(/"/g,'\'');
$('t3').value = char.stringify(no_rep_arr);

// let a5=[1,2,3,4,5];
// console.log(a5.indexOf(4));
// console.log(a5.lastIndexOf(4));
/*
function res(arr) {
        var tmp = [];
        var copy = [];
        arr.forEach(function (item) {
            if(copy.indexOf(item) === -1){
                copy.push(item)
            }else{
                if(tmp.indexOf(item) === -1){
                    tmp.push(item)
                }
            }
        })
        return tmp.sort()
    }

function res(arr) {
        var tmp = [];
        arr.forEach(function (item) {
            (arr.indexOf(item) !== arr.lastIndexOf(item) && tmp.indexOf(item) === -1) && tmp.push(item)
        })
        return tmp;
}

var _arr = ['旅行箱', '旅行箱', '小米', '大米'];  
var _res = []; //   
_arr.sort();  
for (var i = 0; i < _arr.length;) {  
    var count = 0;  
    for (var j = i; j < _arr.length; j++) {  
        if (_arr[i] == _arr[j]) {  
            count++;  
        }  
    }  
    _res.push([_arr[i], count]);  
    i += count;  
}  
//_res 二维数维中保存了 值和值的重复数  
var _newArr = [];  
for (var i = 0; i < _res.length; i++) {  
    // console.log(_res[i][0] + "重复次数:" + _res[i][1]);  
    _newArr.push(_res[i][0] + 'x' + _res[i][1]);  
}  
// console.log(_newArr); 

*/
