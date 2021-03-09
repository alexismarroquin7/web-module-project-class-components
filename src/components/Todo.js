import React from "react"
import "./Todo.css"
const Todo = (props) => {
    const {todo, toggleTodo} = props;
    const {name, id, completed} = todo;
    return (
    <div className="Todo">
    <h3 
        onClick={() => toggleTodo(id)}
        className={`${completed ? "completed":"incompleted"}`}
    >
        {name}
    </h3>
    </div>
    );

}

export default Todo;