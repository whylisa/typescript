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
