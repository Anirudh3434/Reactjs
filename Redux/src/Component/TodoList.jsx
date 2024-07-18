import { useState, useEffect } from "react";
import { removeT} from '../Function/reducer'
import '../App.css'
import {useDispatch} from 'react-redux'

function TodoList({ todo }) {
  
 
 
  const dispatch = useDispatch()


 

 

  return (
    <div className="list-container">
  
      <input
        type="text"
        value={todo.text}
        
        readOnly={false}
      />
      <div>
        
      
        <button className="list-btn-r" onClick={() => {dispatch(removeT(todo.id))}}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
