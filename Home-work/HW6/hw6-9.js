//  =========================
//  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black'
        });
    }
}
// console.log(deck);

// for (let cardAce of deck) {
// 	if (card.cardSuit === 'heart' && card.value === 'ace') {
// 		console.log(card);
// 	}
// }
//
// for (let cardSix of deck) {
// 	if (cardSix.value === '6') {
// 		console.log(cardSix);
// 	}
// }
//
// for (let cardBlack of deck) {
// 	if (cardBlack.color === 'black') {
// 		console.log(cardBlack);
// 	}
// }

// for (let cardClubs of deck) {
// 	if (cardClubs.cardSuit === 'spade') {
// 		console.log(cardClubs);
// 	}
// }

// for (let cardSpade of deck) {
// 	if (cardSpade.cardSuit === 'spade' && cardSpade.value > '9' || cardSpade.cardSuit === 'spade' && cardSpade.value === '10') {
// 		console.log(cardSpade);
// 	}
// }