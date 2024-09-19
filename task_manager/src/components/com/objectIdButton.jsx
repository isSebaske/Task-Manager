import React, { Component } from "react";
import { Link } from "react-router-dom";

class ObjectIdButton extends Component {
  render() {
    const { task } = this.props;
    return (
      <button type="button" className="btn btn-outline-light">
        <strong className=" text-decoration-none">
          <Link
            to={`/task-list/${task._id}/${task.title}`}
            className=" text-black h2"
          >
            {task.title}
          </Link>
        </strong>
      </button>
    );
  }
}

export default ObjectIdButton;
