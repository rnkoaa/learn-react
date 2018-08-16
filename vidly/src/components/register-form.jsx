import React from "react";
import Joi from "joi-browser";
import { validate } from "../services/validator-service";
import Form from "./common/forms";

class RegisterForm extends Form {
  state = {
    data: {
      accountName: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    accountName: Joi.string()
      .required()
      .label("Name"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("Submitted.", this.state.data);
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="accountName">Name</label>
            <input
              type="text"
              value={data.accountName}
              onChange={this.onValueChange}
              className="form-control"
              id="accountName"
              name="accountName"
              aria-describedby="accountName"
              placeholder="Enter your name"
            />
            {errors.accountName && (
              <small id="accountNameHelp" className="form-text text-muted alert alert-danger">
                {errors.accountName}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input
              type="email"
              value={data.username}
              onChange={this.onValueChange}
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {errors.username && (
              <small id="emailHelp" className="form-text text-muted alert alert-danger">
                {errors.username}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={data.password}
              type="password"
              name="password"
              onChange={this.onValueChange}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            {errors.password && (
              <small id="emailHelp" className="form-text text-muted alert alert-danger">
                {errors.password}
              </small>
            )}
          </div>
          <div className="form-group">
            <button disabled={validate(data, this.schema)} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
