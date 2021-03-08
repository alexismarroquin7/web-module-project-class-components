import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoData from "./data/todoData"

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
      id: Date.now() + todoName,
      completed: false
    }
    this.setState({
      todosList: [...this.todosList, newTodo]
    })
  } 

  render() {
    return (
      <div>
      <TodoList toggleTodo={this.toggleTodo} todosList={this.state.todosList}/>        
      <TodoForm addTask={this.addTask}/>        
      </div>
    );
  }
}

export default App;
