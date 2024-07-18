import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList'
import Input from './Component/Input'
import {TodoContext , TodoContextProvider , useTodo} from './Context/index'

function App() {
 
  const [todos , setTodo] = useState([])

const addTodo=(todo)=>{
   setTodo((prev)=>[{id: Date.now,...todo},...prev])
}

const updateTodo=(id , todo)=>{
  setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id? todo: prevTodo )))
}

const removeTodo=(id)=>{
  setTodo((prev)=>prev.filter((prevTodo) => prevTodo.id !== id))
}

const completeTodo=(id)=>{
  setTodo((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
}

useEffect(() => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
 
      const parsedTodos = JSON.parse(storedTodos);
      setTodo(parsedTodos);
   
  }
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


  return (
    <TodoContextProvider value={{todos,addTodo,removeTodo,updateTodo,completeTodo}}> 
   <div className='container'>
   <h1>Welcome to your Todo..</h1> 
  

  <Input />
  {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} />
        ))}

   </div>
    
    </TodoContextProvider>
  )
}

export default App
