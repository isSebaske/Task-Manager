import React from "react";

const SortGroups = (props) => {
  const { onSort } = props;
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="me-auto">Task List</h1>
      <nav className="d-flex list-unstyled align-items-center">
        <h3>Sort By</h3>
        <li
          onClick={() => onSort("title")}
          className=" ms-2 btn btn-outline-dark border-0"
        >
          Title
        </li>
        <li
          onClick={() => onSort("task")}
          className=" ms-2 btn btn-outline-dark border-0"
        >
          Task
        </li>
        <li
          onClick={() => onSort("category")}
          className=" ms-2 btn btn-outline-dark border-0"
        >
          Category
        </li>
        <li
          onClick={() => onSort("severity.name")}
          className=" ms-2 btn btn-outline-dark border-0"
        >
          Severity
        </li>
        <li
          onClick={() => onSort("completed")}
          className=" ms-2 btn btn-outline-dark border-0"
        >
          Completed
        </li>
      </nav>
    </div>
  );
};

export default SortGroups;
