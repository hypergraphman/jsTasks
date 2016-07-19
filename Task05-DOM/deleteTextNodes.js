let deleteTextNodes = function (elem) {
    let countDel = 0;

    // при этом исполнении если идут два текстовых узла подряд работать не будет
    // т.к. при удалении текстового узла происходит как бы перескок на следующий узел
    // for (let node of elem.childNodes) {
    //     if (node.nodeType === 3) {
    //         elem.removeChild(node);
    //         i++;
    //     }
    // }


    // так не перескакивает и удаляет все текстовые узлы
    let childNodes = elem.childNodes;
    for (let indexNode = 0; indexNode < childNodes.length; indexNode++) {
        if (childNodes[indexNode].nodeType === 3) {
            elem.removeChild(childNodes[indexNode--]);
            countDel++;
        }
    }
    console.log('удалено ' + countDel + ' элементов');
};

module.exports = {
    deleteTextNodes : deleteTextNodes
};