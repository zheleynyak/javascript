// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(mode, producer, year, maxSpeed, engineVolume) {
	this.mode = mode
	this.producer = producer
	this.year = year
	this.maxSpeed = maxSpeed
	this.engineVolume = engineVolume

	this.drive = function () {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	};
	this.info = function () {
		for (let key in this) {
			console.log(key + ': ' + this[key]);
		}
	}
	this.increaseMaxSpeed = function (newSpeed) {
		this.maxSpeed = this.maxSpeed + newSpeed;
	}
	this.changeYear = function (newYear) {
		this.year = newYear;
	}
	this.addDriver = function (objectDriver) {
		this.driver = objectDriver;
	}
}

let car1 = new Car('a5', 'audi', '2024', 250, 3000);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(20);
car1.addDriver({name:12312});
console.log(car1);