// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cendrillon {
	constructor(name, age, sizeFoots) {
		this.name = name;
		this.age = age;
		this.sizeFoots = sizeFoots;
	}
}

class Prince {
	constructor(name, age, foundShoeSize) {
		this.name = name;
		this.age = age;
		this.foundShoeSize = foundShoeSize;
	}

}

let cendrillons = [
	new Cendrillon("Золушка", 18, 39),
	new Cendrillon("Элла", 19, 37),
	new Cendrillon("Синдерелла", 20, 38),
	new Cendrillon("Ашпозель", 19, 35),
	new Cendrillon("Чарльз", 22, 42),
	new Cendrillon("Мария", 19, 39),
	new Cendrillon("Клара", 17, 40),
	new Cendrillon("Луиза", 25, 37),
	new Cendrillon("Анна", 20, 36),
	new Cendrillon("Изабелла", 22, 38)
];

let prince1 = new Prince('Denis', 25, 39);

for (let obj of cendrillons) {
	if (prince1['foundShoeSize'] === obj['sizeFoots']) {
		console.log(obj);
	}
}
