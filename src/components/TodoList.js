import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    const {todosList} = props;

    return (
        <div>
        <h1>TodoList</h1>
        {todosList.map(todoItem => {
            return <Todo key={todoItem.id} todo={todoItem}/>;
        })}
        </div>
    );
}


export default TodoList;