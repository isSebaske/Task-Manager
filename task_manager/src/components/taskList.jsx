import React, { Component } from "react";
import Task from "./com/Task";
import ListGroup from "./com/listGroup";
import Pagination from "./com/pagination";
import { paginate } from "../utils/paginate";
import SortGroups from "./sortGroups";
import _ from "lodash"

class TaskList extends Component {


  render() {
    const { tasks, onCompleted, onAlert, onPageChange, pageSize, currentPage, selectedCategory, onItemSelect, categorys, sortColumn, onSort,  } = this.props;

    const filteredTasks =
      selectedCategory && selectedCategory !== "All Tasks"
        ? tasks.filter(task => task.category === selectedCategory)
        : tasks;
    
    const sorted =  _.orderBy(filteredTasks, [sortColumn.path], [sortColumn.order])

    const task = paginate(sorted, currentPage, pageSize);
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
        
      <div className=" mt-3 col-10">
        <SortGroups onSort={onSort} />
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