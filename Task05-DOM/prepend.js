let prepend = function (container, newElement) {
    container.insertBefore(newElement, container.firstElementChild);
};

module.exports = {
    prepend : prepend
};