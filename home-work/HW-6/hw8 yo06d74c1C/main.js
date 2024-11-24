// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((u1, u2) => {
    return u2.monthDuration - u1.monthDuration;
})
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
let map = filter.map(function (value, index) {
    return {id: index + 1, ...value}
});

console.log(map);


// let map1 = coursesAndDurationArray
//     .sort((u1, u2) => u2.monthDuration - u1.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({id: index + 1, ...value}));
//
// console.log(map1);