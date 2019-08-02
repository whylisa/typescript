let output = identity<string>('mystring')
function identity<T>(arg: T) : T {
	return arg
}

function loggingIdentuty<T> (arg: T): T {
	return arg
}
function identity<T> (arg: T) : T {
	
}
function getProperty<T, k extends keyof T> (obj:T, key: k) {
	return obj[key]
}
