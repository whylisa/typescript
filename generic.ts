function identity<T>(arg: T): T {
	return arg
}

let output = identity<string>('myString')


let output = identity('myString')
function identity<T>(arg: T): T {
	return arg
}


function loggingIdentity<T>(arg: T): T {
	console.log(arg.length)
	return arg
}
