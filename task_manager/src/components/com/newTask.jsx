import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NewTask = () => {
  return (
    <Link className="btn btn-outline-primary shadow-sm" to="/task-list/new">
      New Task
    </Link>
  );
};

export default NewTask;
