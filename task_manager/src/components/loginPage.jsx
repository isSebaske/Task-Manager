import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" row">
      <form className="col-2">
        <div className="form-group p-2">
          <label for="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group p-2">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
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
