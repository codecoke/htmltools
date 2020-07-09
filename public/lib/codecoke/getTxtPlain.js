function _( s ) {
  for (var k in s) {
    s[k.toUpperCase()] = s[k];
  }
  return s;
}

let block = _({
  address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1
  ,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1
  ,noframes:1,ol:1,p:1,pre:1,table:1,ul:1
});

let fillChar = '\u200B';


let getPlainTxt = function () {
  // fillChar: ie && browser.version == '6' ? '\ufeff' : '\u200B',
            
  var reg = new RegExp(fillChar, 'g'),
    html = this.body.innerHTML.replace(/[\n\r]/g, '')
    ;//ie要先去了\n在处理

  html = html.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
    .replace(/<br\/?>/gi, '\n')
    .replace(/<[^>/]+>/g, '')
    .replace(/(\n)?<\/([^>]+)>/g, function (a, b, c) {
      return block[c] ? '\n' : b ? b : '';
    });
  //取出来的空格会有c2a0会变成乱码，处理这种情况\u00a0
  return html.replace(reg, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
};

let unhtml=function (str, reg) {
  return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
    if (b) {
      return a;
    } else {
      return {
        '<':'&lt;',
        '&':'&amp;',
        '"':'&quot;',
        '>':'&gt;',
        "'":'&#39;'
      }[a];
    }

  }) : '';
};

let html = function (str) {
  return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m) {
    return {
      '&lt;':'<',
      '&amp;':'&',
      '&quot;':'"',
      '&gt;':'>',
      '&#39;':"'"
    }[m]
  }) : '';
};



let listToMap = function (list) {
  if (!list)return {};
  list = Array.isArray(list) ? list : list.split(',');
  let obj ={};
  for (let i = 0, ci; ci = list[i++];) {
    obj[ci.toUpperCase()] = obj[ci] = 1;
  }
  return obj;
};

let styleBlock = listToMap([
  '-webkit-box', '-moz-box', 'block' ,
  'list-item' , 'table' , 'table-row-group' ,
  'table-header-group', 'table-footer-group' ,
  'table-row' , 'table-column-group' , 'table-column' ,
  'table-cell' , 'table-caption'
]);

console.log(getPlainTxt);
console.log(styleBlock,html,unhtml);

