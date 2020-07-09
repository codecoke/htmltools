
import * as emoji  from '../../lib/codecoke/emoji/emoji.map.group.basic.slim.js';
import { f  }  from '../../lib/codecoke/emoji/emoji.slim.arr.1.1.js';
// import { _emoji_12star }  from '../../lib/codecoke/emoji/emoji.map.group.2.js';

let emoji_mod_arr =[
    'f','f2','s','face','clock','star12'
    ,'animal','hand','room','landmark'
    ,'house','heart','sport','play'
    ,'music','plant','food','holiday'
    ,'traffic','thing','cloth','office'
    ,'human','arrow','ico'
  ]
  ,arr2str = (a,sub)  => {
    let arr =[];
    a= a['_emoji_'+sub];
    a.forEach((v,i) => {
    // _emoji_12star[i][1].push(v[0]);
      arr[i]=[
        sub+'_'+(i+1)
        ,[ 
          v[1][0] , v[1][1] , v[0]
        ] 
      ];
    });
    return JSON.stringify(arr).replace(/"/gi,'\'');
  }
  ,get_emoji_str = (_nameArr,_emojiO) => {
    let emoji_str ='';

    _nameArr.forEach((v,i) => {
      if (_emojiO['_emoji_'+v]) {
        emoji_str +=
          (i==0?'let ':'  ,') 
          +''+v+' = '+ arr2str(_emojiO,v) 
          +'\n'
        ;
      }
    });

    emoji_str = emoji_str.replace(
      /[\]]{3}/g
      ,']]\n]'
    ).replace(
      /[[]{2}/g
      ,'[\n  ['
    ).replace(
      /[\]]{2},\[/g
      ,']]\n    ,['
    )
  +';'
  +'\n\nexport {\n'+_nameArr.join('\n  ,')+'\n};';

    document.getElementById('t1').value = emoji_str;
    return emoji_str;

  }
;

// get_emoji_str(emoji_mod_arr,emoji);

let _f2 = new Map(f);

console.log(_f2.get('heart_break')[0]);

//128683 //1f6ab
console.log('🔄'.codePointAt().toString(16));


// _in_emoji_str = _in_emoji_str.split('\n');
//  ['sport_1',['🎳',127923,'1F3B3']]
function in_emoji_2_arr (str) {
  let arr = str.split('\n');
  let rstr='';
  let arr2 =[];

  arr.forEach((v,i) => {
    if (v.length>1) { 
      arr2= v.split(' ');
      let vf = arr2[0],vn,vcode,v16;
      arr2.shift();
      vn = arr2.join('_').toLowerCase();
      if (vn.indexOf('button')>0) {
        vn ='button_'+vn.replace('_button','');
      }
      v16 = vf.codePointAt();
      vcode = v16.toString(16);
      // let arr3 = arr2.shift();
      rstr += '[\'' 
        + vn +'\',[\''+ vf + '\','+ v16 +',\''+vcode+'\']'
        +']\n    ,';
    }
  });
  return rstr;
  // body
}
/*
属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。

```javascript
const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
```
*/
// console.log('✔️'.codePointAt().toString(16));
console.log('\u{2714}');
document.getElementById('t1').value = in_emoji_2_arr('🎙️ Studio Microphone\n');

// console.log(arr[0]);

// JSON.stringify
// onsole.log('hi');