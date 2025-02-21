// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(array) {
	let summa = 0;
	for (let i = 0; i < array.length; i++) {
		summa += array[i];
	}
	return summa;
}

console.log(sum([1,2,10]));