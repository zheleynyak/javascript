// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let x = +prompt('Enter x');
let y = +prompt('Enter y');

if (x > y) {
	console.log('x is greater than y');
} else if (x < y) {
	console.log('x is less than y');
} else if (x === y) {
	console.log('x equals y');
}