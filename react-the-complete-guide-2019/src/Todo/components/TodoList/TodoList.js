import React from 'react';

import Todo from '../Todo/Todo';

const TodoList = (props) => {
  const todos = props.todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} />
    );
  });
  
  return (
    <ul className="TodoList">{todos}</ul>
  );
};

export default TodoList;
