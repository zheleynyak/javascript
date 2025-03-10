// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
}

const users = [
    new User(100, "Den", "Zheleznyak", "den@gmail.com", "+830534365"),
    new User(224, "Alex", "Ivanov", "alex.ivanov@gmail.com", "+79123456789"),
    new User(31, "Maria", "Petrova", "maria.petrova@gmail.com", "+79234567890"),
    new User(476, "John", "Doe", "john.doe@example.com", "+18005551234"),
    new User(5, "Jane", "Smith", "jane.smith@example.com", "+18005554321"),
    new User(1, "Igor", "Sidorov", "igor.sidorov@mail.ru", "+79998887766"),
    new User(71, "Elena", "Kuznetsova", "elena.kuz@mail.ru", "+79223334455"),
    new User(84, "Chris", "Johnson", "chris.j@example.com", "+14445556677"),
    new User(90, "Natalia", "Volkova", "natalia.v@yandex.ru", "+79997776655"),
    new User(10, "Oleg", "Morozov", "oleg.morozov@mail.ru", "+79334445566"),
];

let sortUsers = users.sort((a, b) => a.id - b.id);
console.log(sortUsers);