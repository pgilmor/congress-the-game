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
              />
              <label htmlFor="username">Username or Email</label>
              <span className="helper-text" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" name="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button type="submit" className="waves-effect waves-light btn">
            Log in
          </button>
        </form>
        <form method="get" action="auth/google">
          <button type="submit" className="waves-effect waves-light btn">
            Log in with Google
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
