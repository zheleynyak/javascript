// let color= 'green';
//
// if (color === 'red') {
//     console.log('stop');
// }else {
//     console.log('go');
// }

// let age = +prompt("What is the age?");
// console.log(age, typeof age);
//
// if (age < 18) {
//     console.log('This content is not intended for persons under 18 years of age, please leave this place');
// }else {
//     console.log('Go');
// }

// let color = prompt('enter color');
//
// if (color === 'green'){
//     if (confirm('is road clear?')) {
//         console.log('go');
//     } else {
//         console.log('just wait');
//     }
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'black') {
//     console.log('stop');
// } else {
//     console.log('error');
// }

let color = prompt('enter color');

let isRoadClear = confirm('is road clear?');
if (color === 'green' && isRoadClear){
    console.log('you can go');
} else if (color === 'yellow') {
    console.log('wait');
} else if (color === 'black') {
    console.log('stop');
} else {
    console.log('error');
}
