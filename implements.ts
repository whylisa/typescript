class Control {
	private state: any
}
interface Select extends Control {
	select()
}
class Button extends Control implements Select {
	select() {
		
	}
}
class Txt extends Control {
	select() {
		
	}
}

class Image implements select {
	select(){}
}

class Greeter {
	static standardGreeting = "hhkh"
	greeting: string
	constructor(message?: string) {
		this.greeting = message
	}
	greet() {
		if(this.greeting) {
			return 'hepppp'+ this.greeting
		}else {
			return Greeter.standardGreeting
		}
	}
}

let greeter: Greeter
greeter = new Greeter()

