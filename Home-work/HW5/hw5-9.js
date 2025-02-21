// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = (array) => {
	for (let item of array) {
		document.write(`<div>`);
		for (let key in item) {
			document.write(`<p>${key}: ${item[key]};</p>`);
		}
		document.write(`</div>`);
	}
};

let users = [
	{name: 'vasya', age: 24, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 21, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 41, status: false},
	{name: 'max', age: 31, status: true}
];

object(users);