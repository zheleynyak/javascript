// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


function User(id, name, surname, email, phone) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
}

let users = [
    new User(1, "Den", "Zheleznyak", "den@gmail.com", "+830534365"),
    new User(2, "Alex", "Ivanov", "alex.ivanov@gmail.com", "+79123456789"),
    new User(3, "Maria", "Petrova", "maria.petrova@gmail.com", "+79234567890"),
    new User(4, "John", "Doe", "john.doe@example.com", "+18005551234"),
    new User(5, "Jane", "Smith", "jane.smith@example.com", "+18005554321"),
    new User(6, "Igor", "Sidorov", "igor.sidorov@mail.ru", "+79998887766"),
    new User(7, "Elena", "Kuznetsova", "elena.kuz@mail.ru", "+79223334455"),
    new User(8, "Chris", "Johnson", "chris.j@example.com", "+14445556677"),
    new User(9, "Natalia", "Volkova", "natalia.v@yandex.ru", "+79997776655"),
    new User(30, "Oleg", "Morozov", "oleg.morozov@mail.ru", "+79334445566"),
];

let filterUsers = users.filter(user => user.id % 2 === 0);
console.log(filterUsers);