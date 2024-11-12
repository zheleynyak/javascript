// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sum(array) {
    let sumNumb = 0;
    for (let i = 0; i < arr.length; i++) {
        sumNumb += arr[i];
    }
    return sumNumb;
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));