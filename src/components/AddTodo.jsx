import { useState } from "react";
import "./addTodo.css"


function AddTodo({addTodo, addTodoBtn}) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault()       
        if (value != ""){
            addTodo(value);
            
            setValue("")
            addTodoBtn()
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }



    return(
        <div className="background">
                <div className="conteiner-add">
                    <h1>NEW NOTE</h1>
                    <input className="todo-input"  type="text" placeholder="Input your note..." value={value} onChange={handleChange} ></input>
                    <div className="add-btns"> 
                        <button className="cancel-btn" onClick={addTodoBtn}>CANCEL</button>
                        <button className="apply-btn" type="submit" onClick={handleSubmit}>APPLY</button>
                    </div>
            </div>
        </div>
    );
    
}

export default AddTodo;