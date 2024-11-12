// document.write(
//     <div>
//         <h2>juice 123</h2>
//         <p>lorem ipsum</p>
//     </div>
// );
//
// document.write(
//     <div>
//         <h2>milk 121</h2>
//         <p>lorem ipsum</p>
//     </div>
// );
//
// document.write(
//     <div>
//         <h2>tea 12</h2>
//         <p>lorem ipsum</p>
//     </div>
// );
//

// function writer(produtTitle,price,description) {
//     document.write(
//         `<div>
//             <h2>${produtTitle}, ${price}</h2>
//             <p>${description}</p>
//         </div>`
//     )
// }
//
// writer('milk',32 ,'somemilk');
// writer('meat', 150, 'meat');


function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

 let users = [
     'Vova', 'Mike', 'Denis'
]
printerArray(users);

//    let user1 = {
//        id: 1,
//        name: 'kokos',
//        age: 123,
//        status: true
//    }
//    let user2 = {
//        id: 2,
//        name: 'abrikos',
//        age: 234,
//        status: false
//    }
//    let user3 = {
//        id: 3,
//        name: 'tomat',
//        age: 345,
//        status: true
//    }
//    let user4 = {
//        id: 4,
//        name: 'ogirok',
//        age: 456,
//        status: false
//    }

function userFactory(id, imya, age, status) {
    let user = {
        id: id,
        name: imya,
        age: age,
        status: status,
    }
    return user;
}

let u1 = userFactory(1, 'kokos', 123, true);
let u2 = userFactory(2, 'abrikos', 234, false);
let u3 = userFactory(3, 'tomat', 345, false);
let u4 = userFactory(4, 'cucumber', 456, true);