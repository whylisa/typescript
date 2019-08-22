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

let myIdentity: {<T>(arg: T): T} = identity

interface GenericIdentityFn {
	<T>(arg: T): T
}

interface Lengthwise {
	length: number
}

function loggingIdentity<Textends>
