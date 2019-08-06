let sym1 = Symbol()
let sym2 = Symbol("key")
let sym2 = Symbol("key")

sym2 === sym3 false

let sym = Symbol()

let obj = {
	[sym]: 'value'
}
console.log(obj[sym]);//value

const getClassNameSymbol = Symbol()
class C {
	[getClassNameSymbol]() {
		return "C"
	}
}

let c = new C()
let className = c[getClassNameSymbol]();

let pets = new Set(['cat','Dog','Hamster'])
pets['species'] = "mammals"
for(let pet in pets) {
	console.log(pet)
}

for (lete pet of pets) {
	console.log(pet)
}
