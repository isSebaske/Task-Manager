import React, { Component } from 'react';
import CompletedButton from './completedButton';

class Task extends Component {


  render() {
    const { task, onCompleted } = this.props;

    return (
      <div className="card shadow-sm m-2 bg-light" style={{ cursor: "default"}}>
        <div className="card-body">
          <h5 className="card-title rounded-2">{task.title}</h5>
          <p className="card-text">{task.task}</p>
          <p className="card-text">
            <strong>Category:</strong> {task.category}
          </p>
          <p className="card-text" >
            <strong>Severity:</strong> <span className={`badge ${task.severity.name === 'Very Important' ? 'bg-danger' : task.severity.name === 'Important' ? 'bg-warning' : 'bg-secondary'}`}>{task.severity.name}</span>
          </p>
          <p className="card-text">
            <strong>Completed: </strong>
            <CompletedButton completed={task.completed} onCompleted={() => onCompleted(task)} />
          </p>
        </div>
      </div>
    );
  }
}

export default Task;