import React, { Component } from "react";
import { Joi } from "joi-browser";
import { getTask, saveTask } from "../data/fakeTaskService-1";

class NewTaskPage extends Component {
  state = {
    data: {
      title: "",
      task: "",
      category: "",
      severity: "",
      completed: false,
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().min(0).max(15).lable("Title"),
    task: Joi.string().required().min(0).max(100).lable("Task"),
    category: Joi.string().required().lable("Category"),
    severity: Joi.string().required().lable("Severity"),
    completed: Joi.boolean(),
  };

  componentDidMount() {
    const tasks = getTask();
    this.setState({ tasks });

    const tasksId = this.match.params.id;
    if (tasksId === "new") return;

    const task = getTask(tasksId);
    if (!task) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToView(task) });
  }

  mapToViewModel(task) {
    return {
      _id: task._id,
      title: task.title,
      task: task.task,
      category: task.category,
      severity: task.severity.name,
      completed: task.completed,
    };
  }

  doSubmit = () => {
    saveTask(this.state.data);

    this.props.history.push("/task-list");
  };

  render() {
    return (
      <div>
        <h1></h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("task", "Task")}
          {this.renderSelect("category", "Category")}
          {this.renderSelect("severity", "Severity")}
          {this.renderInput("completed", "Completed")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewTaskPage;
