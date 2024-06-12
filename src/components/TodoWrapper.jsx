import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodpoForm from "./EditTodoForm";
import './todoWrapper.css'
import AddTodo from "./AddTodo";
import noTodo from "../assets/noTodo.png"

function TodoWrapper({setDarkMode}){

    const [isVisible, setIsVisible] = useState(false)

    const [todos, setTodos] = useState([])

    const [showTodos, setShowTodos] = useState("All")

    const [searchTodo, setSearchTodo] = useState("")

    const addTodo = todo => {
        setTodos([...todos, {id: Date.now(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplated = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing} : todo
        ))
    }

    const addTodoBtn = () =>  {
        setIsVisible(!isVisible)
    }

    const setSelectedOption = (e) => {
        setShowTodos(e)
    }


    const renderTodos = () => {
        switch (showTodos) {
            case "All":
                if (todos.length === 0) {
                    return(<img src={noTodo} alt="No Todos"></img>)
                }else{
                    return(todos.map((todo, index) => (
                        todo.isEditing ? (
                            <EditTodpoForm editTodo={editTask} task={todo}></EditTodpoForm>
                        ): (
                            <Todo task={todo} key={index} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo}/>
                        )
                    )));
                }
                break;
            case "IsChekd":
                if (todos.length === 0) {
                    return(<img src={noTodo} alt="No Todos"></img>)
                }else{                    return(
                    todos.map((todo, index) => (
                            todo.completed ? (
                                todo.isEditing ? (
                                    <EditTodpoForm editTodo={editTask} task={todo}></EditTodpoForm>
                                ): (
                                    <Todo task={todo} key={index} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo}/>
                                )
                            ): (null)
                        )
                    )
                );}
                break;
            case "UnCheckd":
                if (todos.length === 0) {
                    return(<img src={noTodo} alt="No Todos"></img>)
                }else{
                    return(
                        todos.map((todo, index) => (
                            !todo.completed ? (
                                todo.isEditing ? (
                                    <EditTodpoForm editTodo={editTask} task={todo}/>
                                ): (
                                    <Todo task={todo} key={index} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo} />
                                )
                            ): (null)
                        )   
                        )
                    );
                }
                break;
            default:
                if (todos.length === 0) {
                    return(<img src={noTodo} alt="No Todos"></img>)
                }else{
                    return(todos.map((todo, index) => (
                        todo.isEditing ? (
                            <EditTodpoForm editTodo={editTask} task={todo}></EditTodpoForm>
                        ): (
                            <Todo task={todo} key={index} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo}/>
                        )
                    )));
                }
            break;
        }
    }

    const hendleSearchTodo = (e) => {
        setSearchTodo(e)
    }

    
    const changeDarkMode = () => {
        setDarkMode();
    }






    const renderSearchTodo = () => {
        const filteredTodos = todos.filter(todo => todo.task.toLowerCase().includes(searchTodo));
        if (filteredTodos.length === 0) {
            return(<img src={noTodo} alt="No Todos"></img>)
        }else{
            return(
                filteredTodos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodpoForm editTodo={editTask} task={todo}></EditTodpoForm>
                    ): (
                        <Todo task={todo} key={index} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                ))
            )
        }
    }

    return(
        <div className="Conteiner" >
            {isVisible && (<AddTodo className="addTodo" addTodo={addTodo} addTodoBtn={addTodoBtn}></AddTodo>)}
            <h1>TODO LIST</h1>
            <div className="TodoWrapper">
                <TodoForm setSelectedOption={setSelectedOption} changeDarkMode={changeDarkMode}  hendleSearchTodo={hendleSearchTodo} />
                {searchTodo === "" ? renderTodos() : renderSearchTodo()}
            </div>
           <button className="add-btn" onClick={addTodoBtn}>+</button>
        </div>
    )
}

export default TodoWrapper