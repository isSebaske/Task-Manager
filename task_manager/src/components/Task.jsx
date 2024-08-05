import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="card m-2 shadow-sm bg-light">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.task}</p>
        <p className="card-text">
          <strong>Category:</strong> {task.category}
        </p>
        <p className="card-text">
          <strong>Severity:</strong> <span className={`badge ${task.severity.name === 'Very Important' ? 'bg-danger' : task.severity.name === 'Important' ? 'bg-warning' : 'bg-secondary'}`}>{task.severity.name}</span>
        </p>
        <p className="card-text">
          <strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export default Task;