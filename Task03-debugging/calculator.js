// тут все элементарно все по ДЗ три со *

let someNumber = {
    n: undefined,
    sum: function () {
        s = this.n;
        for(let i = 0; i < arguments.length; i++) {
            s += arguments[i];
        }
        return s;
    },
    dif: function () {
        s = this.n;
        for(let i = 0; i < arguments.length; i++) {
            s -= arguments[i];
        }
        return s;
    },
    div: function () {
        s = this.n;
        for(let i = 0; i < arguments.length; i++) {
            if (arguments[i] == 0) throw new Error ('Divided by zero');
            s /= arguments[i];
        }
        return s;
    },
    mul: function () {
        s = this.n;
        for(let i = 0; i < arguments.length; i++) {
            s *= arguments[i];
        }
        return s;
    }
};

function calculator (firstNumber) {
    obj = someNumber;
    obj.n = firstNumber;
    return obj;
}

module.exports = calculator;