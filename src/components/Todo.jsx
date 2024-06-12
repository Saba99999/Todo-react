import { useState } from 'react';
import kalami from '../assets/kalami.png'
import urna from '../assets/urna.png'
import './todo.css'

function Todo({task, toggleComplated, deleteTodo, editTodo}){

    const [isChecked, setIsChecked] = useState(true)

    const handleCheckBoxChange = (event) =>{
        setIsChecked(event.target.checked);
    }

    return(
        <div className='conteiner'>
            <div className="Todo"  >
                <div className='div1'>
                    <input type='checkbox' onChange={() => toggleComplated(task.id)} checked={task.completed} className='checkbox'></input>
                    <p onClick={() => toggleComplated(task.id)} >{task.task}</p>
                </div>
                <div className='div2'>
                    <img src={kalami} onClick={() => editTodo(task.id)} height="13px" width="13px"  className='kalami'></img>
                    <img src={urna} onClick={() => deleteTodo(task.id)} height="13px" width="13px" className='urna'/>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Todo;