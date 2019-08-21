class User {
	fullName: string
	firstName: string
	lastName: string
	constructor (firstName: String, lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
		this.fullName = firstName+ ' ' + lastName
	}
}

interface Person {
	firstName:string
	lastName: string
}

function greeting (person: Person) {
	return 'hello' + person.firstName + person.lastName
}

let user = new User('yee', 'Huang')

class User {
	fullName: string
	firstName: string
	lastName: string
	constructor(firstName: string,lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
		this.fullName = firstName + lastName
	}
}
interface Person {
	firstName
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message
	}
	greet() {
		return "hello" + this.greeting;
	}
}
