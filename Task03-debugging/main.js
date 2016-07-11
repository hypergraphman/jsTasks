
let calc = require('./calculator.js');

let myCalculator = calc(100);

try {
	console.log(myCalculator.sum(1, 2, 3)); //вернет 106
	console.log(myCalculator.dif(10, 20)); //вернет 70
	console.log(myCalculator.div(2, 2)); //вернет 25
	console.log(myCalculator.mul(2, 2)); //вернет 400

	console.log(myCalculator.div(2, 0, 2)); // вызовет исключение
}
catch(e) {
	console.log(e.message);
}

// массив сообщений об ошибках, если в дальнейшем еще исключениями пользоваться
const _errorMessage = ['The array is empty'];

// тестовые массивы
let allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'Привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'],
	emptyArr = [];

// Функция проверяет числового ли типа переменная
let isNumber = function (val) {
	return typeof val === 'number';
};

// Функция проверяет весь массив source на выполнение функции filterFn каждым элементом
// (или не выполнение функции filterFn - выбираем третьим параметром)
let isAllCheck = function(source, filterFn, check) {
	try {
		if (!source.length) {
			throw new Error (_errorMessage[0]);
		}

		// проверяем каждый элемент на неравенсто check,
		// если встречаем хоть один негодный, то меняем check и выходим из цикла
		for (let i = 0; i < source.length; i++) {
			if (filterFn(source[i]) !== check) {
				check = !check;
				break;
			}
		}
	}
	catch (e) {
		// по хорошему так делать нельзя и здесь нужно предоставлять ввывод этой инфы пользователю
		// что что-то пошло не так. Но в данном случае для простоты решил сделать так.
		check = e.message;
		// по хорошему я бы сделал возврат из функции к примеру нуля (вроде как функция не выполнилась как надо)
		// return 0;
	}
	finally {
		// в данном случае мы знаем как будет использоваться наша функция и только поэтому выводим через check всю информацию
		return check;
	}
};

let isAllTrue = function (source, filterFn) {
	return isAllCheck(source, filterFn, true);
};

let isSomeTrue = function (source, filterFn) {
	return isAllCheck(source, filterFn, false);
};

console.log(isAllTrue(emptyArr, isNumber)); // обработка исключения
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false


console.log(isSomeTrue(emptyArr, isNumber)); // обработка исключения
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
