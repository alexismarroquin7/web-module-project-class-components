import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoData from "./data/todoData"
import "./App.css"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      todosList:todoData
    }
  }

  toggleTodo = (clickedOnId) => {
    this.setState({
      todosList: this.state.todosList.map(item => {
        
        // return item.id === clickedOnId
        // ? {...item, completed: !item.completed}
        // : item;

        if(item.id === clickedOnId){
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }

      })
    })
  }

  addTask = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todosList: [...this.state.todosList, newTodo]
    })
  }
  clearTasks = () => {
    const completedTasks = this.state.todosList.filter(item => {
      return item.completed === false;
    })
    console.log(completedTasks)
    this.setState({
      todosList: [...completedTasks]
    })
  }

  render() {
    return (
      <div className="App">
      <TodoList toggleTodo={this.toggleTodo} todosList={this.state.todosList}/>        
      <TodoForm clearTasks={this.clearTasks} addTask={this.addTask}/>        
      </div>
    );
  }
}

export default App;
