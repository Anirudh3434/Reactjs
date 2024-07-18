import { useState, useEffect } from "react";
import { useTodo } from "../Context";

function TodoList({ todo }) {
  const [todoMsg, setTodoMsg] = useState("");
  const [isEditable, setEditable] = useState(false);
  const { removeTodo, updateTodo, completeTodo } = useTodo();

  useEffect(() => {
    if (todo) {
      setTodoMsg(todo.todo);
    }
  }, [todo]);

  const edit = (id) => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(false);
  };

  const toggleCompleted = () => {
    completeTodo(todo.id);
  };

  if (!todo) {
    return null; 
  }

  return (
    <div className="list-container">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
     
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <div>
        <button className="list-btn" onClick={() => setEditable(true)}>
          Edit
        </button>
        {isEditable && (
          <button className="list-btn" onClick={() => edit(todo.id)}>
            Save
          </button>
        )}
        <button className="list-btn-r" onClick={() => removeTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
