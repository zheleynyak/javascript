// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
	this.order = order;
}

let Clients = [
	new Client(1, 'Denis', 'Zhelezniak', 'denis@gmail.com', '+830193403', ['iphone 11', 'case', 'rtx2060']),
	new Client(2, 'Alex', 'Ivanov', 'alex.ivanov@gmail.com', '+79123456789', ['macbook pro']),
	new Client(3, 'Maria', 'Petrova', 'maria.petrova@gmail.com', '+79234567890', ['ipad air', 'apple pencil', 'magic keyboard']),
	new Client(4, 'John', 'Doe', 'john.doe@example.com', '+18005551234', ['samsung s21', 'wireless charger']),
	new Client(5, 'Jane', 'Smith', 'jane.smith@example.com', '+18005554321', ['airpods pro']),
	new Client(6, 'Igor', 'Sidorov', 'igor.sidorov@mail.ru', '+79998887766', ['asus rog laptop', 'gaming mouse', 'mechanical keyboard', 'headset']),
	new Client(7, 'Elena', 'Kuznetsova', 'elena.kuz@mail.ru', '+79223334455', ['kindle paperwhite', 'book cover']),
	new Client(8, 'Chris', 'Johnson', 'chris.j@example.com', '+14445556677', ['ps5', 'dualshock controller', 'gaming headset']),
	new Client(9, 'Natalia', 'Volkova', 'natalia.v@yandex.ru', '+79997776655', ['xiaomi mi 11']),
	new Client(10, 'Oleg', 'Morozov', 'oleg.morozov@mail.ru', '+79334445566', ['rtx 4090', 'cooling pad', 'gaming monitor', 'rgb keyboard', 'mouse pad'])

];
console.log(Clients);