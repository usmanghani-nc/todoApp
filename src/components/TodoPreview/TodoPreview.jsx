import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import Input from '../Input/Input';
import Button from '../customBtn/Button';

import './todo.style.scss';

const TodoPreview = ({ id, check, todoDlt, todoEdit, completed, title }) => {
  let todoComplete = {
    textDecoration: 'line-through',
    fontStyle: 'italic',
    color: '#D3D3D3'
  };

  return (
    <li className="todo-list-item" style={completed ? todoComplete : null}>
      <div className="viewTodo">
        <div className="todo-input">
          <Input
            type="checkbox"
            checked={completed ? true : false}
            onChange={check.bind(this, id)}
          />
        </div>

        <div className="todo-title">{title}</div>

        <div className="todo-btn">
          <Button className="edit-btn" onClick={todoEdit.bind(this, id)}>
            <FontAwesomeIcon icon={faEdit} className="icon-edit" />
          </Button>

          <Button className="dlt-btn" onClick={todoDlt.bind(this, id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="icon-trash" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TodoPreview;
