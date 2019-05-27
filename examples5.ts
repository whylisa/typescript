let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: String; card: number}[]):number
function pickCard(x:number): {suit: string; card: number}

function pickCard(x): any {
	if(Array.isArray(x)) {
		let pickedCard = Math.floor(Math.random() * x.length)
		return pickCard
	}else if(typeof x === 'number'){
		let pickedSuit = Math.floor( x / 13)
		return { suit: suits[pickedSuit], card: x % 13}
	}
	
}

let myDeck = [
{
   suit: 'diamonds', card: 2	
},
{
	suit: 'spades', card: 10
},
{
	suit: 'hearts', card: 4
}
]

let pickedCard1 = myDeck[pickedCard(myDeck)]

let pickedCard2 = pickCard(15)
