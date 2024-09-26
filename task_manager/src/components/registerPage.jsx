import React from "react";
import Joi from "joi-browser";
import Form from "./com/form";

class RegisterPage extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className=" d-flex justify-content-evenly p-5">
        <div>
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            <br />
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
