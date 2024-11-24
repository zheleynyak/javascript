// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


function stringToarray(str) {
    let arr = str.split(' ');
    console.log(arr);
}

let str1 = 'Ревуть воли як ясла повні';

stringToarray(str1);