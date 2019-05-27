function isFunction (val: any): boolean {
	return toString.call(val) === '[object Function]'
}

function extend<T,U> (first: T, second: U): T & U {
	let result = <T & U> {}
	for (let id in first) {
		result[id] = first[id] as any
	}
	for (let id in second) {
		if(!result.hasOwnProperty(id)) {
			result[id] = second[id] as any
		}
	}
	return result 
}
