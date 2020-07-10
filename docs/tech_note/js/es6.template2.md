```js
 let str = 'return' + '`hello ${name}!`';
let func = new Function('name',str);
console.log(func('Jack'));         //hello Jack!
 
//方法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null,str);
console.log(func('Jack'));


const evaluateTemplate = ( template, data ) => {
    with ( data ) {
        return eval( '`' + template + '`' );
    }    
}

const evaluateTemplate = ( template, data ) =>
    template.replace( 
        /\$\{\s*([^\s\}]+)\s*\}/g,  
        ( _, capturedIdentifier ) => 
            data[ capturedIdentifier ]
    );

```
```js
let template = '\
    <div class="js-name">\
        <span class="js-first-name">${ firstName }</span>\
        <span class="js-last-name">${ lastName }</span>\
    </div>';
 
let data = {
    firstName: 'Zsolt',
    lastName: 'Nagy'
};
 
const templatingEngine = 
    template => 
    data =>
    evaluateTemplate( template, data );
 
const evaluateTemplate = ( template, data ) =>
    template.replace( 
        /\$\{\s*([^\s\}]+)\s*\}/g,  
        ( _, capturedIdentifier ) => 
            data[ capturedIdentifier ]
    );
 
console.log( 
    templatingEngine( template )( data ) 
);

```

const sanitize = ( fragmentList, ...substitutionList ) => {
    let result = '';
    for ( let i = 0; i < fragmentList.length; ++i ) {
        result += fragmentList[i];
        if ( substitutionList[i] ) {
            result += substitutionList[i]
                        .replace( />/g, '&gt;' )
                        .replace( /</g, '&lt;' );
        }
    }
    return result;
}
 
let renderName = ( { firstName, lastName } ) => sanitize`
    <div class="js-name">
        <span class="js-first-name">${ firstName }</span>
        <span class="js-last-name">${ lastName }</span>
    </div>
`;



```js

export default function ( { firstName, lastName } ) => `
    <div class="js-name">
        <span class="js-first-name">${ firstName }</span>
        <span class="js-last-name">${ lastName }</span>
    </div>
`;


import renderNameTemplate from 'templates/name.template.js';
 
// ...
document.querySelector( nameContainerSelector ).innerHTML =
    renderNameTemplate( {
        firstName: 'Zsolt',
        lastName: 'Nagy'
    } );
// ...

```