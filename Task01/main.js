function rec (array, i) {
	if (i < array.length) {
		console.log(array[i++]);
		rec(array, i);
	};
};
let arr = ['i', 'learn', 'write', 'code', 'on', 'native', 'js'];

rec(arr, 0);