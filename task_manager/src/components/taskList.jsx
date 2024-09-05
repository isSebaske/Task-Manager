import React, { Component } from "react";
import Task from "./com/Task";
import ListGroup from "./com/listGroup";
import Pagination from "./com/pagination";
import { paginate } from "../utils/paginate";

class TaskList extends Component {


  render() {
    const { tasks, onCompleted, onAlert, onPageChange, pageSize, currentPage, selectedCategory, onItemSelect, categorys  } = this.props;

    const filteredTasks =
      selectedCategory && selectedCategory !== "All Tasks"
        ? tasks.filter(task => task.category === selectedCategory)
        : tasks;

    const task = paginate(filteredTasks, currentPage, pageSize);
    return (
      <div className="row me-4">
        <div className="col-2 mt-5">
          <ListGroup
            tasks={tasks}
            selectedItem={selectedCategory}
            onItemSelect={onItemSelect}
            categorys={categorys}
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