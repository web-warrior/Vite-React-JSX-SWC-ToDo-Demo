
const TodoTask = ({task, toggleComplete, deleteTodo, editTodo}) => {

  return (
    <div className="task-wrapper">
      <span className="task-status-wrapper">
        <input type="checkbox" className={`${task.completed ? "checked": "unchecked"}`}
        onClick={() => toggleComplete(task.id)}
        />
        {task.completed ? (
          <>
            <label className="task-status-complete">Complete</label>
          </>
        ) : (
          <>
          </>
        )}
      </span>
      <span className={`${task.completed ? "task-completed": "task-incomplete"}`}>
        {task.completed ?  (
          <>
            <label className="task-data-complete">{task.task}</label>
          </>
        ) : (
          <>
            <label className="task-data">{task.task}</label>
          </>
        )}
      </span>
        {task.completed ? (
          <>
          </>
        ) : (
          <>
            <span className="nowrap btn-wrapper">
              <button className="btn-secondary" type="button" onClick={() => editTodo(task.id)}>Edit</button>
              <button className="btn-secondary" type="button" onClick={() => deleteTodo(task.id)}>Delete</button>
            </span>
          </>
        )}
    </div>
  )
}

export default TodoTask