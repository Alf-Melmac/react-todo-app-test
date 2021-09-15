class Todo {
	constructor(displayText, important = false) {
		this.id = random();
		this.displayText = displayText;
		this.important = important;
	}
}

function random() {
	return Math.random().toString(16).substr(2, 8);
}

export default Todo;