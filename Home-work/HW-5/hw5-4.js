// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let iterator = (array) => {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
};

let arr = [2, 5, 6, 1, true, "false"];

iterator(arr)