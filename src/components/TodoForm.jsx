import React, {useState, changeDarkMode} from "react";
import DropDownMenu from "./DropDownMenu";
import "./todoForm.css"
import mtvare from '../assets/mtvare.png'
import lupa from '../assets/lupa.png'

function TodoForm({setSelectedOption, changeDarkMode, hendleSearchTodo, searchTodoOrRenderTodo}){



    const [value, setValue] = useState("");

    const hendleSelectedOption = (e) => {
        setSelectedOption(e);
    }


    
    return(
        <form className="TodoForm" >
            <div className="search">
                <input type="text" className="todo-input" placeholder="Search note..." onChange={(e) => (hendleSearchTodo(e.target.value.toLocaleLowerCase()))}></input>
                <img src={lupa} className="search-icon" ></img>
            </div>
            <DropDownMenu hendleSelectedOption={hendleSelectedOption} className="dropdown"/>
            <img src={mtvare} className="mode-btn" onClick={changeDarkMode}></img>
        </form>
    );

}

export default TodoForm;