// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt("day =");

if (day >= 1 && day <= 10) {
	console.log('1');
} else if (day >= 11 && day <= 20) {
	console.log('2');
} else if (day >= 21 && day <= 31) {
	console.log('3');
}