import React from 'react';

import TodoPreview from '../TodoPreview/TodoPreview';

import './todo.style.scss';

const TodoList = ({ todos, check, todoDlt, todoEdit }) => (
  <div className="todo-list-con">
    <ul>
      {todos.map(({ ...otherProps }) => (
        <TodoPreview
          key={otherProps.id}
          check={check}
          todoDlt={todoDlt}
          todoEdit={todoEdit}
          {...otherProps}
        />
      ))}
    </ul>
  </div>
);

export default TodoList;
