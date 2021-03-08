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
        return item.id === clickedOnId
        ? {...item, completed: !item.completed}
        : item;
      })
    })
  }
  
  render() {
    return (
      <div>
      <TodoList todosList={this.state.todosList}/>        
      <TodoForm />        
      </div>
    );
  }
}

export default App;
