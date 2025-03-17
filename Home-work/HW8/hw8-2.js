// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції,які в нього були до цього моменту.

let object1 = {
	title: 'JavaScript Complex',
	monthDuration: 5,
	cost: 1000,
	credit(cost, monthDuration) {
		return cost / monthDuration;
	},
	credit134(cost, monthDuration) {
		return cost / monthDuration;
	}
}


function deepCopy(object) {
	if (object) {
		let functionArray = []
		for (let key in object) {
			if (typeof object[key] === 'function') {
				functionArray.push({key, func: object[key]});
			}
		}
		let jsonUserParse = JSON.parse(JSON.stringify(object));
		for (let item of functionArray) {
			jsonUserParse[item.key] = item.func;
		}
		return jsonUserParse;
	}
}
console.log(object1);
console.log(deepCopy(object1))


