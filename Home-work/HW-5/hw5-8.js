// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let list = (array) => {
	document.write(`<ul>`);
	for (let i = 0; i < array.length; i++) {
		document.write(`<li>${array[i]}</li>`);
	}
	document.write(`</ul>`);
};

let arr = [1, 2, 3, 4, 5, 'tsfasd', true];
list(arr);