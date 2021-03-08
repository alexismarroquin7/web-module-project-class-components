import React from "react"

class TodoForm extends React.Component {
    render(){
        return (
        <form>
    
            {console.log(this.props)}
        <input 
            type="text"
            name="taskText" 
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