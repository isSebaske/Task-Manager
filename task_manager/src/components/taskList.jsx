import React from 'react';
import Task from "./Task";
import {getTasks} from '../data/fakeTaskService-1';

function TaskList() {
    const tasks = getTasks()


  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task List</h1>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4" key={task._id}>
            <Task task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;