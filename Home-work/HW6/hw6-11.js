// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

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

// function serch(array, text) {
// 	for (let objectArray of array) {
// 		for (let key of objectArray.modules) {
// 			if (key === text) {
// 				console.log(objectArray);
// 			}
// 		}
// 	}
// }
//
// serch(coursesArray, 'sass');
// serch(coursesArray, 'docker');
// serch(coursesArray,'python');

console.log(coursesArray.filter(course => {
	return course.modules.includes('docker');
}));

console.log(coursesArray.filter(course => {
	return course.modules.includes('sass');
}));