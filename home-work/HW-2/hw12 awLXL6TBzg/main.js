// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let access1 = coursesAndDurationArray[0]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access1);
let access2 = coursesAndDurationArray[1]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access2);
let access3 = coursesAndDurationArray[2]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access3);
let access4 = coursesAndDurationArray[3]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access4);
let access5 = coursesAndDurationArray[4]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access5);
let access6 = coursesAndDurationArray[5]['monthDuration'] >= 5 ? 'supper' : 'No';

console.log(access6);


// if (coursesAndDurationArray[0]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
// if (coursesAndDurationArray[1]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
// if (coursesAndDurationArray[2]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
// if (coursesAndDurationArray[3]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
// if (coursesAndDurationArray[4]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
// if (coursesAndDurationArray[5]['monthDuration'] >= 5) {
//     console.log('supper');
// } else {
//     console.log('no');
// }
