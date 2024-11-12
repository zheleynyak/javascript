// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function obj(array) {
    for (let user of array) {
        document.write(`<div>`)
        for (let keyUsers in user) {
            document.write(`<p>${keyUsers}: ${user[keyUsers]} </p> `);
        }
        document.write(`</div> <br>`);
    }
}

let users = [{
    id: 5, name: "John Doe", age: 36
}, {
    id: 8, name: "Jane Smith", age: 33
}, {
    id: 3, name: "Alice Johnson", age: 36
}, {
    id: 9, name: "Bob Brown", age: 32
}];

obj(users);