import React from 'react';
import './App.css';
import TaskList from './components/taskList';


function App() {
  return (
        <div className="App">
      <header className=" d-flex align-items-center justify-content-center">
        <h1 className=''>Task Manager</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
