import React from "react"
import "./Todo.css"
const Todo = (props) => {
    const {todo, toggleTodo} = props;
    const {name, id, completed} = todo;
    return (
    <div>
    {
        completed ? console.log(todo.name, todo.completed):console.log(todo.name, todo.completed)
    }
    <h3 
        onClick={() => toggleTodo(id)}
        className={`${completed ? "completed":""}`}
    >{name}</h3>
    </div>
    );

}

export default Todo;