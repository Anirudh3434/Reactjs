import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addT} from '../Function/reducer'
import '../App.css'


const Input = () => {

    const [ todo , setTodo] = useState('')
    const dispatch = useDispatch()



    const add =(e)=>{
           
        dispatch(addT(todo))
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
