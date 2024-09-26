import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import TaskList from "./components/taskList";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";

import AdminPage from "./components/adminPage";
import NewTaskPage from "./components/newTaskPage";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/task-list/:id" component={NewTaskPage} />
            <Route path="/task-list" component={TaskList} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/task-list" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
