class Greeter {
	static standardGreeting = "hello there"
	greeting: string
	constructor(message?: string) {
		this.greeting = message
	}
	
	greet() {
		if(this.greeting) {
			return 'helle,' + this.greeting
		}else {
			return Greeter.standardGreeting
		}
	}
}
let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'hell'
let greeter2: Greeter = new greeterMaker()

class Point {
	x: number
	y: number
}

interface Point3d extends Point {
	z: number
}

let point3d: Point3d = {x: 1,y: 2,z: 3}
