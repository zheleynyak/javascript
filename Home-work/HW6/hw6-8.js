// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration
//     : 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================

let coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];

let sortCoursesAndDurationArray = coursesAndDurationArray.sort(function (a, b) {
	return b.monthDuration - a.monthDuration;
});
console.log(sortCoursesAndDurationArray);


let filterCoursesAndDurationArray = coursesAndDurationArray.filter(function (course) {
	return course.monthDuration > 5;
});
console.log(filterCoursesAndDurationArray);


let mapCoursesAndDurationArray = coursesAndDurationArray.map(function (value, index, monthDuration, array) {
	return {id: index + 1, value: value.title, monthDuration: value.monthDuration};
});
console.log(mapCoursesAndDurationArray);