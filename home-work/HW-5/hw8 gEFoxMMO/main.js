// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

arr = [242, 'name', true];

let arrList = (array) => {
    document.write(`<ul>`)
    for (let arrLi of array) {
        document.write(`<li>${arrLi}</li>`);
    }
    document.write(`</ul>`);
}

arrList(arr);