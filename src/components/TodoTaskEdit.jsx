import { useState } from 'react'

const TodoTaskEdit = ({editTodo, task}) => {
  const[value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <div className="task-wrapper">
      <form className="task-edit-form" onSubmit={handleSubmit}>
        <input type="text" className="task-description"
          required
          minLength={3}
          value={value}
          placeholder="Enter at least 3 characters"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn-secondary right">
          Update Task
        </button>
      </form>
    </div>
  )
}

export default TodoTaskEdit
