import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[  {
        id: 1,
        todo: 'task',
        completed: false
    }
],
addTodo: (todo) =>{},
removeTodo:(id)=>{},
updateTodo: (id,todo)=>{},
completeTodo: (id)=>{}
   
})

export const TodoContextProvider = TodoContext.Provider


export  const  useTodo=()=>{
    return useContext(TodoContext)
}

