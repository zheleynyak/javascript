// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


function stringToarray(string) {
	return string.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);

console.log(arr);