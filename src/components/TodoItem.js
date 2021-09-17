const TodoItem = props => (<li>
	<span className={props.todo.important ? 'imp' : ''}>{props.todo.displayText} </span>
	<button onClick={() => props.onDelete(props.todo)}>Remove</button>
</li>);

export default TodoItem;