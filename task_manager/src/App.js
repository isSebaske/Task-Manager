import React, { Component } from 'react';
import TaskList from './components/taskList';


class App extends Component {

  render () {

    return (
      <div className="App">
        <header className=" d-flex align-items-center justify-content-center">
          <h1>Task Manager</h1>
        </header>
        <main>
          <TaskList onCompleted={this.handleCompleted} />
        </main>
      </div>
    );
  }
}

export default App;
