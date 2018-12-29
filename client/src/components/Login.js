import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container row">
        <form method="post" action="/user/login" className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username"
                name="username"
                type="text"
                className="validate"
                //required
                //minLength="4"
                //maxLength="24"
              />
              <label htmlFor="username">Username</label>
              <span
                className="helper-text"
                data-error="Username must be between 4 and 24 characters"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                //  required
                //  minLength="12"
                //  maxLength="100"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button type="submit" className="waves-effect waves-light btn">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
