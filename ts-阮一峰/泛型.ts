function createArray(length: number,value: string) Array<any> {
	let result = []
	for(let i = 0; i< length; i++) {
		result.push(value)
	}
	return result
}

createArray(3,'xxx')
Array<any>  //为任意类型，这时候我们需要泛型来指定返回值的类型

function createArray(length: number,value: T) Array<T> {
	let result: T[] = []
	//code
}
