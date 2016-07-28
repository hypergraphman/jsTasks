let prepend = require('./prepend');

let doc = document;
let container = doc.querySelector('.i3');
let newElement = doc.querySelector('.i2');

// console.log(container);
// console.log(newElement);

prepend.prepend(container, newElement);


let deleteTextNodes = require('./deleteTextNodes');

// deleteTextNodes.deleteTextNodes(doc.querySelector('body'));


let deleteAllTextNodes = require('./deleteAllTextNodes');

// let countDel = deleteAllTextNodes.deleteAllTextNodes(doc.querySelector('body'));
//
// console.log('удалено ' + countDel + ' элементов');

let scanDOM = require('./scanDOM');

scanDOM.scanDOM(doc);

