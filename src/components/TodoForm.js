import React from "react"

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            todoText: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.todoText)
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
    
        <input 
            type="text"
            name="todoText" 
            value={this.state.todoText}
            onChange={this.handleChange}
            placeholder="Enter Task" 
            autoComplete="off"
        />
        <button type="submit">Add Task</button>
        <button>Clear Completed</button>
        </form>
        )
    }
}

export default TodoForm;