// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (array, index1, index2) => {
	let temporaryCell = array[index1];
	array[index1] = array[index2];
	array[index2] = temporaryCell;
	console.log(array);
}


swap([11, 22, 33, 44], 0, 1);