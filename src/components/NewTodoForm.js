const NewTodoForm = props => {
	function handleSubmit(event) {
		event.preventDefault();
		let elements = event.target.elements;
		props.onSave(elements.taskInput.value, elements.taskImportance.checked);
	}

	return (<form onSubmit={handleSubmit}>
		<input id="taskInput" type="text" placeholder="Task" />
		<input id="taskImportance" type='checkbox'/>
		<button type="submit"> Add Task </button>
	</form>)
}

export default NewTodoForm;