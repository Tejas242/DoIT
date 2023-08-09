import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-button" onClick={() => deleteTask(task)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
