import React from "react"

class Todo extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
        <div>
            {console.log(this.props.todo.id)}
            <h3>{this.props.todo.task}</h3>
        </div>
        )
    }
}

export default Todo;