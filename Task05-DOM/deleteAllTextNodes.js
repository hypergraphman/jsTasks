let deleteAllTextNodes = function (elem) {
    let countDel = 0;
    let childNodes = elem.childNodes;
    for (let indexNode = 0; indexNode < childNodes.length; indexNode++) {
        if (childNodes[indexNode].nodeType === 1) {
            countDel += deleteAllTextNodes(childNodes[indexNode]);
        }

        // Здесь надо быть осторожным с индексом indexNode т.к. при условии что текстовый узел первый
        // индекс будет нулевым, поэтому это условие должно оставаться всегда последним либо
        // переделать надо будет работу с индексами
        if (childNodes[indexNode].nodeType === 3) {
            elem.removeChild(childNodes[indexNode--]);
            countDel++;
        }
    }
    // console.log('удалено ' + countDel + ' элементов');
    return countDel;
};

module.exports = {
    deleteAllTextNodes : deleteAllTextNodes
};
