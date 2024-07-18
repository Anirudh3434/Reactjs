
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import Input from './Component/AddTodo'
import TodoList from './Component/TodoList'




function App() {
  const todos = useSelector((state) => state.todos)


  return (
    <>
      <Input />

      {
        todos.map((todo)=>(
          <TodoList key={todo.id} todo={todo}/>
        ))
      }
    </>
  )
}

export default App
