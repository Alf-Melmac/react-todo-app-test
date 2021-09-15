import React from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";
import Todo from "../todo";
import '../styles/bgColors.css';

const allTodos = [{
	id: '1',
	displayText: "1 Todo",
	important: false
}, {
	id: '2',
	displayText: "2 Todo",
	important: true
}];

const TodoList = () => {
	const [todos, setTodo] = React.useState(allTodos);

	function addTodo(todoText, importance) {
		setTodo(prevTodos => [...prevTodos, new Todo(todoText, importance)]);
	}

	function removeTodo(todo) {
		setTodo(todos.filter(i => i.id !== todo.id))
	}

	return (
		<div>
			<ul>
				{todos.map(todo => (
					<TodoItem todo={todo} key={todo.id} onDelete={removeTodo}/>
				))}
			</ul>
			<NewTodoForm onSave={addTodo}/>
		</div>
	);
}

export default TodoList;