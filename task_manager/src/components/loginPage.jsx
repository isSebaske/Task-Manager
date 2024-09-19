import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" container-sm row">
      <form className="col-3">
        <div className="form-group p-2">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group p-2">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <Link className="btn btn-primary m-2" to="/task-list">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Login;
