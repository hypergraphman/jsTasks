function sum() {
	let result = 0;
	for (let i=0; i<arguments.length; i++){
		result += arguments[i];
	};

	return result;
};

let array = sum;

console.log(array(1,2,3));

let  sum2 = function() {
	let result = 0;
	for (let i=0; i<arguments.length; i++){
		result += arguments[i];
	};

	return result;
};

console.log(sum2(1,2));

function filter(source, gT4) {
	let result = [];

	for(let i=0; i<source.length; i++) {
		if (gT4(source[i])) {
			result.push(source[i]);
		}
	}

	return result;
}

function greaterThan4(value) {
	return value > 4;
}

let res = greaterThan4(10);
// console.log(res);

let array2 = [1,2,3,4,5,6,7,8];
let res2 = filter(array2, greaterThan4);
console.log(res2);

function(){return 2} + function(){return 2} = 4