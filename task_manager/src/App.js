import React, { Component } from 'react';
import TaskList from './components/taskList';
import {getTasks} from "./data/fakeTaskService-1"

class App extends Component {

  state = {
    tasks: getTasks()
  }

  handleCompleted = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...tasks[index] };
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };
  
   handleAlert = task => {
    prompt("The ObjectId is", task._id);
  };

  render () {

    return (
      <div className="App">
        <header className=" d-flex align-items-center justify-content-center">
          <h1>Task Manager</h1>
        </header>
        <main>
          <TaskList onCompleted={this.handleCompleted} tasks={this.state.tasks} alert={this.handleAlert } />
        </main>
      </div>
    );
  }
}

export default App;
