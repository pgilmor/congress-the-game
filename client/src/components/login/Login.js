import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginFormik";

class Login extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card text-center">
          <h3 className="card-header">Sign In</h3>
          <div className="card-body">
            <LoginForm />
          </div>
          <div className="card-footer">
            New user? <Link to="/register">Register for FREE</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
