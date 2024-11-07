let obj = {
    id: 1,
    name: 'vasya',
    age: 16
}

// let access;
//
// if (obj.age > 18) {
//     access = 'Yes';
// } else {
//     access = 'No'
// }
//
// console.log(access);

let access = obj.age > 18 ? 'Yes' : 'No';
console.log(access);