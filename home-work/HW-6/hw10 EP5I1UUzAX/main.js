// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
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

console.log(cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spadeCard.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamondCard.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.heartCard.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubsCard.push(card);
    }
    return accumulator;
}, {spadeCard: [], diamondCard: [], heartCard: [], clubsCard: []}));

