// #jeBqHV525U5
//
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

let coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];


for (let item of coursesAndDurationArray) {
	let div = document.createElement('div');
	div.classList.add('div-course');
	let p = document.createElement('p');
	p.innerText = item.title + ' ' + item.monthDuration;
	div.append(p);
	document.body.appendChild(div);
}