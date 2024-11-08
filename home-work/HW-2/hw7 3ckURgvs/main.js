// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('enter number 0-59');

if (time >= 0 && time <= 15) {
    console.log('1 частина');
} else if (time >= 16 && time <= 30) {
    console.log('2 частина');
} else if (time >= 31 && time <= 45) {
    console.log('3 частина');
} else if (time >= 46 && time <= 60) {
    console.log('4 частина');
} else {
    console.log('error');
}