let prepend = function (container, newElement) {
    container.insertBefore(newElement, container.firstChild);
    // так текстовый узел будет первым
    // container.insertBefore(newElement, container.firstElementChild);
};

module.exports = {
    prepend : prepend
};