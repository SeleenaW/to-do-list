import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ToDo = ({ id, text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">
        {text}
      </div>
      <div className="icons">
        <BiEdit className="icon" onClick={() => updateMode(id, text)} />
        <AiFillDelete className="icon" onClick={() => deleteToDo(id)} />
      </div>
    </div>
  );
};

export default ToDo;
