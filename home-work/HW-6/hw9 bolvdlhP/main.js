// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let cardValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];


let cards = [];
for (let suit of cardSuit) {
    for (let value of cardValue) {
        let card = {cardSuit: suit, cardValue: value};
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);


let find = cards.find(value => value.cardSuit === 'spade' && value.cardValue === 'ace');
console.log(find);

let filter = cards.filter(value => value.cardValue === '6');
console.log(filter);

let filter1 = cards.filter(value => value.cardSuit === 'spade');
console.log(filter1);

let filter2 = cards.filter(value => value.cardSuit === 'clubs' && value.cardValue !== '6' && value.cardValue !== '7' && value.cardValue !== '8' && value.cardValue !== '9');
console.log(filter2);