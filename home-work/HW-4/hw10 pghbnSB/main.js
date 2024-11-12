// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let arrNumb = [1, 5, 25, 0, 42, 5, 534, -32, 1, -5434];
let x = 0;

console.log(arrNumb);

for (let i = 0; i < arrNumb.length; i++) {
    if (x >= arrNumb[i]) {
        console.log(arrNumb[i]);
    }
}