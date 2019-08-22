interface Person {
	firstName: string;
	lastName:string;
}

function greeter(person:Person) {
	return "hello," + person.firstName+ " " + person.lastName;
}

let user = { firstName: 'june',lastName: "user"}

document.body.innerHTML = greeter(user)

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});


interface SquareConfig {
	color?: string;
	width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number} {
	let newSquar = { color: 'white', area: 100}
}
