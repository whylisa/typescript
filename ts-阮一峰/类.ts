//静态方法
class Animal {
	static isAnimal(a) {
		return a instanceof animal;
	}
}

let a = Animal('jack')

Animal.isAnimal(a) //类名直接调用

class Animal {
	pubilc name;
	pubilc constructor(name) {
		this.name = name
	}
}

let a = new Animal("jack")
a.name = 'TOM'

class Animal {
	private name;
	pubilc constructor (name) {
		this.name = name;
	}
}

let a = new Animal('jsck')
a.name = 'tom' //无法被修改---在子类也不能访问

var Animal = (function () {
	function Animal(name) {
		this.name = name;
	}
	return Animal;
}())

var a = new Animal('jack')
a.name = 'tom'

