import React from 'react';

const TodoForm = (props) => {

  let input;

  const getInputElement = (element) => {
    input = element;
  };

  const addTodoHandler = () => {
    props.addTodo(input.value);
    input.value = '';
  };

  return (
    <div className="TodoForm">
      <input ref={getInputElement}/>
      <button onClick={addTodoHandler}>+</button>
    </div>
  );
};

export default TodoForm;
