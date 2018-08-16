import React from "react";
import Joi from "joi-browser";
import { validate } from "../services/validator-service";
import Form from "./common/forms";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("Submitted.")
  };

  render() {
    const { data: account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input
              type="email"
              value={account.username}
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
              value={account.password}
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
            <button disabled={validate(account, this.schema)} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
