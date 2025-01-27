import { useState } from 'react'

const TodoListForm = ({addTodo}) => {
  const[value, setValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isFormValid) {
      addTodo(value);
      setValue("");
    // }
  }

  // const handleTaskEntry = (e) => {
  //   setValue(e.target.value);
  //   validateTodoListForm(e);
  // }

  // const validateTodoListForm = (e) => {
  //   const isValid = e.target.value.length >= 3;
  //   setIsFormValid(isValid);
  // }

  return (
    <div className="todo-list-wrapper">
      <form className="todo-list-form" onSubmit={handleSubmit}>
        <label for="task-description" className="task-label">Task Description:</label>
        <input type="text" id="task-description" className="new-task-description"
          required
          minLength={3}
          value={value}
          placeholder="Enter at least 3 characters"
          onChange={(e) => setValue(e.target.value)}
          // onChange={handleTaskEntry}
        />
        {/* <button type="submit" id="add-task" className="btn-primary" disabled={!isFormValid}>
          Add Task
        </button> */}
        <button type="submit" id="add-task" className="btn-primary right">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoListForm
