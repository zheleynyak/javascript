// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [{
	title: 'JavaScript Complex',
	monthDuration: 5,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
	title: 'Java Complex',
	monthDuration: 6,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
	title: 'Python Complex',
	monthDuration: 6,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
	title: 'QA Complex',
	monthDuration: 4,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
	title: 'FullStack',
	monthDuration: 7,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
	title: 'Frontend',
	monthDuration: 4,
	hourDuration: 909,
	modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];


for (let course of coursesArray) {
	let divMain = document.createElement('div');
	let h1 = document.createElement('h1');
	h1.innerText = course.title;
	let divInfo = document.createElement('div');
	let pMounth = document.createElement('p');
	pMounth.innerText = course.monthDuration;
	let pHours = document.createElement('p');
	pHours.innerText = course.hourDuration;
	let divModuls = document.createElement('div');
	for (let key of course.modules) {
		let divKey = document.createElement('div');
		divKey.innerText = key;
		divModuls.appendChild(divKey);
	}
	divMain.appendChild(h1);
	divInfo.append(pMounth, pHours);
	divMain.append(divInfo, divModuls);
	document.body.append(divMain);
}