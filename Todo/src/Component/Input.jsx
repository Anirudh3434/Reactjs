import React, { useState } from 'react';
import { useTodo } from '../Context/index';

const Input = () => {

    const [ todo , setTodo] = useState('')

    const {addTodo, todos} = useTodo()

    const add =()=>{
        
        if(!todo) return
            addTodo({todo , completed: false})
            setTodo('')
        
    }



  return (
    <div className='inputField'>
    <input type="text" placeholder="Enter your task" 
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}

    />
       <button className='Add' onClick={add}>
        Add
       </button>
    </div>
  );
}

export default Input;
