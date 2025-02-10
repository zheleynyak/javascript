// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let authors = [
	{name: 'J. K. Rowling', age: 59},
	{name: 'George Orwell', age: 46},
	{name: 'J. R. R. Tolkien', age: 81}
];

let book1 = {
	title: "Harry Potter and the Philosopher's Stone",
	pageCount: 223,
	genre: 'fantasy',
	authors: authors[0]
};

let book2 = {
	title: 'Nineteen Eighty-Four',
	pageCount: 328,
	genre: 'Dystopian, political fiction, social science fiction',
	authors: authors[1]
};

let book3 = {
	title: 'The lord of the rings',
	pageCount: 1077,
	genre: 'fantasy',
	authors: authors[2]
};

console.log(book1, book2, book3);