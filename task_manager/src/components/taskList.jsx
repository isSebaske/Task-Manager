import React, { Component } from "react";
import Task from "./com/Task";
import ListGroup from "./com/listGroup";
import Pagination from "./com/pagination";
import { paginate } from "../utils/paginate";
import SortGroups from "./com/sortGroups";
import _ from "lodash";
import { getTasks } from "../data/fakeTaskService-1";
import NewTask from "./com/newTask";

class TaskList extends Component {
  state = {
    tasks: [],
    currentPage: 1,
    pageSize: 8,
    categorys: ["All Tasks", "DayToDay", "Home", "Work"],
    selectedCategory: "All Tasks",
    sortColumn: { path: "title", order: "asc" },
    sorts: ["Title", "Task", "Category", "Severity.name", "Completed"],
    selectedSort: "Title",
  };

  componentDidMount() {
    const tasks = getTasks();
    this.setState({ tasks });
  }

  handleCompleted = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...tasks[index] };
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.setState({ sortColumn, selectedSort: path });
    console.log(path);
  };

  render() {
    const {
      tasks,
      currentPage,
      pageSize,
      selectedCategory,
      categorys,
      sortColumn,
      sorts,
      selectedSort,
    } = this.state;

    const filteredTasks =
      selectedCategory && selectedCategory !== "All Tasks"
        ? tasks.filter((task) => task.category === selectedCategory)
        : tasks;

    const sorted = _.orderBy(
      filteredTasks,
      [sortColumn.path],
      [sortColumn.order]
    );

    const task = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row me-4">
        <div className=" col-2 row">
          <div className=" offset-1 col-10">
            <ListGroup
              selectedItem={selectedCategory}
              onItemSelect={this.handleCategorySelect}
              categorys={categorys}
            />
            <SortGroups
              onSort={this.handleSort}
              sorts={sorts}
              selectedSort={selectedSort}
            />
            <div className="mt-4 d-flex justify-content-center">
              <NewTask />
            </div>
          </div>
        </div>

        <div className=" mt-3 col-10">
          <div className="row">
            {task.map((task) => (
              <div className="col-3" key={task._id}>
                <Task task={task} onCompleted={this.handleCompleted} />
              </div>
            ))}
          </div>
          <Pagination
            itemsCount={filteredTasks.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default TaskList;
