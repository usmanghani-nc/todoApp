import React from 'react';

import Input from '../Input/Input';
import Button from '../customBtn/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';

import './form.style.scss';

const Form = ({ handleInput, editting, currentTodo, handelEditSubmit, handelSubmit }) => (
  <div className="form">
    <form onSubmit={editting ? handelEditSubmit : handelSubmit}>
      <div className="form-group">
        <Input
          handleChange={handleInput}
          name="value"
          type="text"
          placeholder="Make Todo"
          value={currentTodo}
        />
        {editting ? (
          <Button type="submit">
            <FontAwesomeIcon icon={faEdit} className="icon-edit" />
          </Button>
        ) : (
          <Button type="submit">
            <FontAwesomeIcon icon={faPlusSquare} className="icon-add" />
          </Button>
        )}
      </div>
    </form>
  </div>
);

export default Form;
