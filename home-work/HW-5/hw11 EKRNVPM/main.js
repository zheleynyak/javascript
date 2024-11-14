// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [1, 5, 6, 5, -1];

let sum = (arr) => {
    let min = 0;
    for (i = 0; i < arr.length; i++) {
        min += arr[i];
    }
    return console.log(min);
}


sum(arr);
