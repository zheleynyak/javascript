// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let minNumbFunction = (array) => {
	let minNumber = array[0];
	for (let i = 0; i < array.length; i++) {
		if (minNumber > array[i]) {
			minNumber = array[i];
		}
	}
console.log(minNumber);
};


let arr = [2, 5, 6, 1];

minNumbFunction(arr);