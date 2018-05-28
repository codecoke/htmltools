import Zam  from '../lib/third-party/zam/zam.js';

// export class Foo1 extends Zam {
//   constructor() {
//     super();
//     this.append(new Zam('<div>Hello {{someData}}!</div>'), 'hello-text');
//     this.append(new Zam('<input type="text" z-bind="someData"></input>'), 'hello-input');
//   }
// }

// let f = Foo1.render();

let _input = new Zam(`<input z-bind="someData" placeholder="{{placeHolder}}" />`)
  ,_input2 = new Zam(`<input z-Func="someData2" alert('1') />`)
  ,_input3 = new Zam(`<input placeholder="{{placeHolder3}}" />`)
  ,_word = new Zam(`<div style="{{helloStyle}}">Hello {{someData}}!</div>`)
  ,_word2 = new Zam(`<div style="{{helloStyle}}">Hello2 {{someData2}}!</div>`)
  ;

export class Root extends Zam {
  constructor() {
    super();
    this.append(_word, 'hello-world1');
    this.append(_input, 'input');
    this.append(_word2, 'hello-world2');
    this.append(_input2, 'input2');
    this.append(_input3, 'input2');
    // this['hello-world1'].prop('helloStyle', 'font-size:30px;');
  }
}

var rootObjects = Root.shadowRender();
// rootObjects[0]['input'].prop('placeHolder', 'Type something...');
// rootObjects[0]['input2'].prop('placeHolder2', 'Type something...');
// rootObjects[0]['hello-world1'].prop('helloStyle', 'color:red;font-size:30px;');

// rootObjects[1]['hello-world1'].prop('helloStyle', 'color:green;font-size:30px;');
// rootObjects[1]['hello-world1'].prop('someData', 'color:green;font-size:30px;');
console.log(rootObjects);
// console.log(f);
// console.log(f[0]['hello-input']);