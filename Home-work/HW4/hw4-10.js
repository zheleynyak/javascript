// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function filter(array) {
	let minNumber = array[0];
	for (let i = 0; i < array.length; i++) { // можно начинать с i = 1, т.к. мы уже присвоили minNumber значение i = 0
		if (minNumber > array[i]) {
			minNumber = array[i];
		}
	}
	console.log(minNumber);
}

let arr = [9, 3, -1, 5, 10, 6, 2, 5, 1, 7, 8];

filter(arr);