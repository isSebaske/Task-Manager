import React, { Component } from "react";
import Task from "./Task";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class TaskList extends Component {
  state = {
    currentPage: 1,
    pageSize: 6,
  };


  render() {
    const { tasks, onCompleted, onAlert, onPageChange, pageSize, currentPage  } = this.props;

    const task = paginate(tasks, currentPage, pageSize);
    return (
      <div className="container mt-4">
        <h1 className="mb-4 ms-2">Task List</h1>
        <div className="row">
          {task.map((task) => (
            <div className="col-md-4 p-1" key={task._id}>
              <Task
                task={task}
                onCompleted={onCompleted}
                onAlert={() => onAlert(task)}
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={tasks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
}

export default TaskList;
