// =========================
//
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
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


let reduceDeck = deck.reduce((accumulator, deck) => {
	if (deck.cardSuit === 'heart') {
		accumulator.hearts.push(deck);
	} else if (deck.cardSuit === 'diamond') {
		accumulator.diamonds.push(deck.cardSuit);
	} else if (deck.cardSuit === 'clubs') {
		accumulator.clubs.push(deck.cardSuit);
	} else if (deck.cardSuit === 'spade') {
		accumulator.spades.push(deck.cardSuit);
	}
	return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduceDeck);