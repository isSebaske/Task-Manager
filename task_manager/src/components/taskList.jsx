import React, { Component } from 'react';
import Task from "./Task";


class TaskList extends Component {
 

  
  render() {
    return (
      <div className="container mt-4">
        <h1 className="mb-4 ms-2">Task List</h1>
        <div className="row">
          {this.props.tasks.map((task) => (
            <div className="col-md-4 p-1" key={task._id}>
              <Task task={task} onCompleted={this.props.onCompleted} alert={()=> this.props.alert(task)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TaskList;