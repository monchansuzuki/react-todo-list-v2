import React, { Component } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

    state = {
        todos : [
            {id:1, content: 'Finir la nourriture'},
            {id:2, content: 'Demander de l\'argent '}
        ]
    }

    deleteTodo=(id)=>{
        let todoFilter = this.state.todos.filter((todo)=>{
            return id !== todo.id
            })
        this.setState({
            todos: todoFilter
        })
    }

    addTodo = (todo) =>{
        todo.id = Math.random();
        console.log(todo);
        this.setState({
            todos : this.state.todos.concat(todo)
        })


    }
  render() {
    return (
      <div className="App">
          <h1>Todo List</h1>
        <Todos todos={this.state.todos} handleDelete={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
