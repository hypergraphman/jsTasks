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

let statistics = scanDOM.scanDOM(doc);

for (let item of statistics) {
    if (item.type === 1 ) {
        console.log(`Тэгов ${item.name}: ${item.count}\n`);
    }
    else if (item.type === 2 ) {
        console.log(`Элементов с классом ${item.name}: ${item.count}\n`);
    }
    else if (item.type === 3) {
        console.log(`Текстовых узлов: ${item.count}\n`);
    }
}

