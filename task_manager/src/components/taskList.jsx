import React, { Component } from 'react';
import Task from "./Task";
import {getTasks} from '../data/fakeTaskService-1';

class TaskList extends Component {
  state = {
    tasks : getTasks()
  }
   handleCompleted = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...tasks[index] };
     tasks[index].completed = !tasks[index].completed;
     this.setState({tasks})
   };
  
  render() {
    const { onCompleted } = this.props;
    return (
      <div className="container mt-4">
        <h1 className="mb-4">Task List</h1>
        <div className="row">
          {this.state.tasks.map((task) => (
            <div className="col-md-4" key={task._id}>
              <Task task={task} onCompleted={ this.handleCompleted}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TaskList;