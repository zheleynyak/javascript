// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 223,
    genre: 'Fantasy',
    author: [
        {name: 'J. K. Rowling', age: '59-aged'}
    ]
}
console.log(book1);
let book2 = {
    title: 'The Lord of the Rings',
    pageCount: 1077,
    genre: 'Fantasy',
    author: [
        {name: 'J. R. R. Tolkien', age: '81-aged'}
    ]
}
console.log(book2);
let book3 = {
    title: 'Dune',
    pageCount: '412 (first edition) \, 896 (paperback)',
    genre: 'Science fiction \, Philosophical fiction',
    authors: [
        {name: 'Frank Herbert', age: '65-aged'}
    ]
}
console.log(book3);