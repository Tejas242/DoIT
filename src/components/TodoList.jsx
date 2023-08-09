import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
