// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let arrNumb = [10, 5, 25, 0, 42, 5,-100000, 534, -32, 1, -5434];

function extracted(array) {
    let min = arrNumb[0];

    console.log(arrNumb);

    for (let elementArr of arrNumb) {
        if (min > elementArr) {
            min = elementArr;
        }
    }
    return console.log(min);
}

extracted(arrNumb);