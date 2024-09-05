import React, { Component } from "react";
import Task from "./com/Task";
import ListGroup from "./com/listGroup";
import Pagination from "./com/pagination";
import { paginate } from "../utils/paginate";

class TaskList extends Component {


  render() {
    const { tasks, onCompleted, onAlert, onPageChange, pageSize, currentPage, selectedCategory, onItemSelect  } = this.props;

    const categories = ["All Categories", ...Array.from(new Set(tasks.map(task => task.category)))];


    const filteredTasks =
      selectedCategory && selectedCategory !== "All Categories"
        ? tasks.filter(task => task.category === selectedCategory)
        : tasks;

    const task = paginate(filteredTasks, currentPage, pageSize);
    return (
      <div className="row me-4">
        <div className="col-2">
          <ListGroup
            tasks={tasks}
            selectedItem={selectedCategory}
            onItemSelect={onItemSelect}
          />
        </div>
        
      <div className=" mt-4 col-10">
        <h1 className="mb-4 ">Task List</h1>
        <div className="row">
          {task.map((task) => (
            <div className="col-4" key={task._id}>
              <Task
                task={task}
                onCompleted={onCompleted}
                onAlert={() => onAlert(task)}
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={filteredTasks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
      </div>
    );
  }
}

export default TaskList;
