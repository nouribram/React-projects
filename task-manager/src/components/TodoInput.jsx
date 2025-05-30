import { useState } from "react"

export function TodoInput(props) {
 
  const { handleAddTodo } = props
   
  return (
        <div className="input-container">
           <input placeholder="Add Task"/>
           <button onClick={() => {}}>
             <i className="fa-solid fa-plus"></i>
           </button>
        </div>
    )
}