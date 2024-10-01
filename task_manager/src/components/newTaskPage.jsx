import React from "react";
import Joi from "joi-browser";
import { getTask, saveTask, deleteTask } from "../data/taskService";
import Form from "./com/form";

class NewTaskPage extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      task: "",
      category: "",
      severityId: "",
    },
    severity: [
      { _id: "662183a550d3e453f3103716", name: "Not Normal" },
      { _id: "6621833950d3e453f3103712", name: "Important" },
      { _id: "6621836150d3e453f3103714", name: "Very Important" },
    ],
    errors: {},
  };

  schema = {
    _id: Joi.string().allow(""),
    title: Joi.string().required().min(0).max(15).label("Title"),
    task: Joi.string().required().min(0).max(35).label("Task"),
    category: Joi.string().required().label("Category"),
    severityId: Joi.string().required().label("Severity"),
  };

  async populateTask() {
    try {
      const tasksId = this.props.match.params.id;
      if (tasksId === "new") return;

      const { data: task } = await getTask(tasksId);
      console.log("Fetched task data:", task);
      this.setState({ data: this.mapToViewModel(task) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateTask();
    console.log(this.state.data.severityId);
  }

  handleDelete = async () => {
    const taskId = this.state.data._id;
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(taskId);
      this.props.history.push("/task-list");
    }
  };

  mapToViewModel(task) {
    return {
      _id: task._id,
      title: task.title,
      task: task.task,
      category: task.category,
      severityId: task.severity._id,
    };
  }

  doSubmit = async () => {
    const { _id, ...taskData } = this.state.data;

    if (_id) {
      await saveTask(this.state.data);
    } else {
      await saveTask(taskData);
    }

    this.props.history.push("/task-list");
  };

  render() {
    const { severity, categories } = this.state;
    return (
      <div className=" d-flex justify-content-evenly p-5">
        <div>
          <h1>
            {this.props.match.url === "/task-list/new"
              ? "New Task"
              : "Update Task"}
          </h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderInput("task", "Task")}
            {this.renderInput("category", "Category", categories)}
            {this.renderSelect("severityId", "Severity", severity)}
            <br />
            <div className="d-flex justify-content-between">
              {this.renderButton("Save")}
              {this.state.data._id && (
                <button
                  type="button"
                  className="btn btn-danger ms-3"
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTaskPage;
