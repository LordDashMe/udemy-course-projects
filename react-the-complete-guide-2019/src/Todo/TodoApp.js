import React, { Component } from 'react';

import Title from './components/Title/Title';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './TodoApp.css';

class TodoApp extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoId: 0
    };
  }

  addTodoHandler(text) {
    const todo = {
      id: this.state.todoId,
      text: text
    };
    
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      todoId: this.state.todoId + 1
    });
  }

  removeTodoHandler(event) {
    const remainingTodos = this.state.todos.filter((todo) => {
      if (todo.id !== parseInt(event.currentTarget.getAttribute('id'))) {
        return todo;
      }
      return false;
    });

    this.setState({
      todos: remainingTodos,
      todoId: this.state.todoId
    });
  }

  render() {
    return (
      <div className="TodoApp">
        <Title />
        <TodoForm addTodo={this.addTodoHandler.bind(this)} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodoHandler.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;
