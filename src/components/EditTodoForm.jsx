import { useState } from "react"
import "./editTodoForm.css"

function EditTodpoForm({editTodo, task}){

    const [value, setvalue] = useState(task.task)

    const hendleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setvalue("")
      } 


    return(
      <form className="TodoForm">

        <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={(e) => setvalue(e.target.value)}></input>
        <button type="submit" className="todo-btn" onClick={hendleSubmit}>Update Task</button>

      </form>  
      );
}

export default EditTodpoForm