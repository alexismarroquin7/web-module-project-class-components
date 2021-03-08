import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    const {todosList, toggleTodo} = props;

    return (
        <div>
        <h1>TodoList</h1>
        {todosList.map(todoItem => {
            return <Todo toggleTodo={toggleTodo} key={todoItem.id} todo={todoItem}/>;
        })}
        </div>
    );
}


export default TodoList;