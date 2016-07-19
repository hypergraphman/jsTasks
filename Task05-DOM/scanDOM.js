let thing = {
    type  : undefined,
    name  : undefined,
    count : 0
};

let countByTagName = function (array, name) {
    let isCount = false;
    for (let item of array) {
        if (item.name === name && item.type === 1) {
            item.count++;
            isCount=true;
        }
    }
    if (!isCount)
        array.push (new function () {
            this.type  = 1;
            this.name  = name;
            this.count = 0;
        })
};

let statistics = [];

statistics.push(new function () {
    this.type  = 3;
    this.name  = 'Text';
    this.count = 0;
});

let scanDOM = function (something) {
    let nodes = something.childNodes;

    for (let node of nodes) {
        if (node.nodeType === 1) {
            countByTagName(statistics, node.tagName);
            scanDOM(node);
        }
        if (node.nodeType === 3) {
            statistics[0].count++;
        }
    }

    return statistics;
};

module.exports = {
    scanDOM : scanDOM
};