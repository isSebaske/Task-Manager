import React, { Component } from "react";
import TaskList from "./components/taskList";
import { getTasks } from "./data/fakeTaskService-1";

class App extends Component {
  state = {
    tasks: [],
    currentPage: 1,
    pageSize: 6,
    categorys: ["All Tasks", "DayToDay", "Home", "Work"],
    selectedCategory: "All Tasks",
  };

    componentDidMount() {
    const tasks = getTasks()
    this.setState({tasks});
  }

  handleCompleted = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...tasks[index] };
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  handleAlert = (task) => {
    prompt("The ObjectId is", task._id);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  
  handleCategorySelect = category => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  }

  render() {
    const { tasks, currentPage, pageSize, selectedCategory, categorys} = this.state
    return (
      <div className="App">
        <header className=" d-flex align-items-center justify-content-center">
          <h1>Task Manager</h1>
        </header>
        <main>
          <TaskList
            tasks={tasks}
            selectedCategory={selectedCategory}
            onItemSelect={this.handleCategorySelect}
            onCompleted={this.handleCompleted}
            onAlert={this.handleAlert}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            pageSize={pageSize}
            categorys={categorys}
          />
        </main>
      </div>
    );
  }
}

export default App;