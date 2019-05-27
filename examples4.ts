var Greeter = /**@class**/ (function () {
	function Greeter(message) {
		this.greeting = message
	}
	Greeter.prototype.greet = function() {
		if( this.greeting) {
			return 'hello' + this.greeting
		}else {
			return Greeter.standardGreeting
		}
	}
	Greeter.standardGreeting = 'hello there'
	return Greeter
}())

var greeting;
greeter = new Greeter()

var greeterMaker - Greeter
 greetereMaker.standardGreeting = 'Hey there'
 var greeter2 = new greeterMaker()
 
 
