// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(index1, index2, array) {
	let temporarNumber = array[index1];
	array[index1] = array[index2];
	array[index2] = temporarNumber;
	console.log(array);
}

let arr = [11, 22, 33, 44];

swap(0, 3, arr);