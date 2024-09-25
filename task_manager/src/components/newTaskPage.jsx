import React from "react";
import Joi from "joi-browser";
import { getTask, saveTask } from "../data/fakeTaskService-1";
import Form from "./com/form";

class NewTaskPage extends Form {
  state = {
    data: {
      title: "",
      task: "",
      category: "",
      severity: "",
      completed: false,
    },
    categories: [{ name: "DayToDay" }, { name: "Home" }, { name: "Work" }],
    severity: [
      { name: "Normal" },
      { name: "Important" },
      { name: "Very Important" },
    ],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().min(0).max(15).label("Title"),
    task: Joi.string().required().min(0).max(35).label("Task"),
    category: Joi.string().required().label("Category"),
    severity: Joi.string().required().label("Severity"),
    completed: Joi.boolean(),
  };

  componentDidMount() {
    const tasksId = this.props.match.params.id;
    if (tasksId === "new") return;

    const task = getTask(tasksId);
    if (!task) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(task) });
  }

  mapToViewModel(task) {
    return {
      _id: task._id,
      title: task.title,
      task: task.task,
      category: task.category,
      severity: task.severity.name || task.severity,
    };
  }

  doSubmit = () => {
    saveTask(this.state.data);

    this.props.history.push("/task-list");
  };

  render() {
    return (
      <div className=" d-flex justify-content-evenly p-5">
        <div>
          <h1>New Task</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderInput("task", "Task")}
            {this.renderSelect("category", "Category", this.state.categories)}
            {this.renderSelect("severity", "Severity", this.state.severity)}
            <div className="mt-2">{this.renderButton("Save")}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTaskPage;
