// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function listBilder(array) {
	document.write(`<ul>`);
	for (let i = 0; i < array.length; i++) {
		document.write('<li>' + array[i] + '</li>');
	}
	document.write(`</ul>`);
}


let arr = [true, false, 2, 'dfdfa'];


listBilder(arr);