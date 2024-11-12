// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


arr = [242, 'name', true];

function arrList(array) {
    document.write(`<ul>`)
    for (let arrUL of array) {
        document.write(`<li>${arrUL}</li>`);
    }
    document.write(`</ul>`);
}

arrList(arr);