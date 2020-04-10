import React from 'react';

const Todo = (props) => {
  return (
    <li>{props.todo.text}
      <button onClick={props.removeTodo} 
              id={props.todo.id}>x</button>
    </li>
  );
};

export default Todo;
