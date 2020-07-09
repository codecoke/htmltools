// import * as emojiArr from '../../lib/codecoke/emoji/emoji.slim.arr.1.2.js';
import { $,where }  from '../../lib/codecoke/core/codecoke.core.1.js';
import { emoji_arr,char,getNamesArr,str2emojiarr } from '../../lib/codecoke/emoji/emoji.slim.arr.1.3.js';



let name_arr = getNamesArr(emoji_arr);

$('t1').value = `['${name_arr.join('\',\'')}']`;
// where();
console.log(~-1);
let repArr = []
  ,onlySet = new Set()
  ,repSet = new Set()
  ,nameSet = []
;


// let _new_emoji_arr = emoji_arr.filter((v) => {
//   let vi =v[1][1];
//   if(repSet.has(vi)){
//     repArr.push(vi);
//   }else{
//     repSet.add(vi);
//     return v;
//   }
// });

let _only_emoji_arr = emoji_arr.filter((v) => {
  let vi =v[1][1];
  if(onlySet.has(vi)){
    // repArr.push(vi);
    repSet.add(vi);
    nameSet.push(v[0]);
  }else{
    onlySet.add(vi);
    return v;
  }
});

let repEmojiArr = emoji_arr.filter((v) => repSet.has(v[1][1]));

let filtEmojiArr = _only_emoji_arr.filter( (v) => !repSet.has(v[1][1]));
let nameEmojiArr = emoji_arr.filter( (v) => nameSet.includes(v[0]));

console.log(
  ' repSet:'+ repSet.size 
  +'\n onlySet:'+ onlySet.size 
  +'\n only:'+ _only_emoji_arr.length 
  +'\n name:'+ nameEmojiArr.length 
  +'\n all:'+emoji_arr.length
  +'\n filt:'+ filtEmojiArr.length
);
$('t1').value= char.stringify(nameEmojiArr);
$('t2').value=char.stringify(repArr);
$('t3').value= char.stringify(filtEmojiArr);   //.replace(/'\]\],\['/gi,']]\n,[');
let a5=[1,2,3,4,5];
console.log(a5.indexOf(3));
console.log(a5.lastindexOf(3));
// ''.replace(/"/g,'');

// document.getElementsByTagName('h1')[0].innerHTML = char.fByi(128279);

// document.getElementsByTagName('h1')[0].innerText = char.arr('🏳️‍🌈')[0];
// console.log(char.arr(128703)); //NaN
// console.log(char.arr('24C2')); //NaN
// console.log(char.arr('  🚿  ')); //0
// let a=[['a',[1,2,3]]],b=['b',[4,5,6]];
// let c1 = a.concat(b);
// console.log(c1);
// console.log(
//   [1,2,3,4,5,6].filter(  
//     (v)  => ( v > 4 ? v :null) 
//     //return v;
//     // if (v>2) return v;
//       // return v>4 ? v :null;
//     )
// );

// console.log(Number.parseInt('1f517',16));
// console.log(String.fromCodePoint('0x1f517'));
// let _in_str =`
// ico
// 🏁 flag Chequered
// 🚩 flag Triangular
// 🎌 flag Crossed
// 🏴 flag Black
// 🏳 flag White
// 🏳️‍🌈 flag Rainbow
// `;

// $('t3').value=str2emojiarr(_in_str);

/*
includes
🏚 
🏠
🏚️


🛒 Shopping Cart
🦍 Gorilla
🦊 Fox 
🦌 Deer
🦏 Rhinoceros
🦇 Bat
🦅 Eagle
🦆 Duck
🦉 Owl
🦎 Lizard
🦈 Shark
🦋 Butterfly
🦓 Zebra
🦒 Giraffe
🦔 Hedgehog
👨‍🍳 Man Cook
♀ Female Sign
♂ Male Sign
🖕🏻 Middle Finger: Light Skin Tone

🛐 Place of Worship
⚛ Atom Symbol
🕉 Om
✡ Star of David
☸ Wheel of Dharma
☯ Yin Yang
✝ Latin Cross
☦ Orthodox Cross
☪ Star and Crescent
☮ Peace Symbol
🕎 Menorah
🔯 Dotted Six-Pointed Star
♈ Aries
♉ Taurus
♊ Gemini
♋ Cancer
♌ Leo
♍ Virgo
♎ Libra
♏ Scorpio
♐ Sagittarius
♑ Capricorn
♒ Aquarius
♓ Pisces
⛎ Ophiuchus

🇦 Regional Indicator Symbol Letter A
🇧 Regional Indicator Symbol Letter B
🇨 Regional Indicator Symbol Letter C
🇩 Regional Indicator Symbol Letter D
🇪 Regional Indicator Symbol Letter E
🇫 Regional Indicator Symbol Letter F
🇬 Regional Indicator Symbol Letter G
🇭 Regional Indicator Symbol Letter H
🇮 Regional Indicator Symbol Letter I
🇯 Regional Indicator Symbol Letter J
🇰 Regional Indicator Symbol Letter K
🇱 Regional Indicator Symbol Letter L
🇲 Regional Indicator Symbol Letter M
🇳 Regional Indicator Symbol Letter N
🇴 Regional Indicator Symbol Letter O
🇵 Regional Indicator Symbol Letter P
🇶 Regional Indicator Symbol Letter Q
🇷 Regional Indicator Symbol Letter R
🇸 Regional Indicator Symbol Letter S
🇹 Regional Indicator Symbol Letter T
🇺 Regional Indicator Symbol Letter U
🇻 Vv Regional Indicator Symbol Letter V
🇼 Regional Indicator Symbol Letter W
🇽 Regional Indicator Symbol Letter X
🇾 Regional Indicator Symbol Letter Y
🇿 Regional Indicator Symbol Letter Z
2 Digit Two
5 Digit Five
9 Digit Nine
0 Digit Zero
7 Digit Seven
1 Digit One
6 Digit Six
3 Digit Three
8 Digit Eight
* Asterisk
# Number Sign
4 Digit Four
*/