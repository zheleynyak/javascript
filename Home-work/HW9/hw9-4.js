// #Kx1xgoKy8
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
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
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

for (let course of coursesAndDurationArray) {
	let courseDiv = document.createElement('div');
	courseDiv.classList.add('item');
	let titleH1 = document.createElement('h2');
	titleH1.classList.add('heading');
	titleH1.innerText = course.title;
	let timeP = document.createElement('p');
	timeP.classList.add('description')
	timeP.innerText = course.monthDuration;
	courseDiv.append(titleH1, timeP);
	document.body.appendChild(courseDiv);
}