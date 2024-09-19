import React from "react";

const TaskInfo = ({ match, history }) => {
  return (
    <div>
      <h1 className="m-3">
        Title ({match.params.title})<br></br> ID ({match.params.id})
      </h1>
      <button
        className="btn btn-primary ms-3"
        onClick={() => history.push("/task-list")}
      >
        Save
      </button>
    </div>
  );
};

export default TaskInfo;
