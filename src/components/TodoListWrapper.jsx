import { useState } from 'react'
import TodoListForm from './TodoListForm'
import { v4 as UUIDv4 } from 'uuid'
import TodoTask from './TodoTask'
import TodoTaskEdit from './TodoTaskEdit'

const TodoListWrapper = () => {
  const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: UUIDv4(), task: todo, completed: false, isEditing: false }
      ])
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) =>
      todo.id !== id));

    const toggleComplete = (id) => {setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed}: todo));
    }

    const toggleChecked = (id) => {setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, checked: !todo.checked}: todo));
    }

    const editTodo = (id) => {setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
    }

    const editTask = (task, id) => {setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
    }

  return (
    <div className="todo wrapper">
      <h1>Todo List</h1>
      {/* This is the TodoWrapper */}
      <TodoListForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <TodoTaskEdit
            key={index}
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <TodoTask
            task={todo}
            key={todo.id}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            toggleChecked={toggleChecked}
            deleteTodo={deleteTodo}
          />
        )
      ))}
    </div>
  )
}

export default TodoListWrapper