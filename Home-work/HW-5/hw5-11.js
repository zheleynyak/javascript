// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sum = (array) => {
	let minSum = 0;
	for (let i = 0; i < array.length; i++) {
		minSum += array[i];
	}
	console.log(minSum);
}

sum([1, 2, 10])