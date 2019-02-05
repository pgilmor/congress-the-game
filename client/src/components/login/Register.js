import React, { Component } from "react";
import RegisterFormik from "./RegisterFormik";

class Register extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card text-center">
          <h3 className="card-header">Register for a FREE Account</h3>
          <RegisterFormik />
        </div>
      </div>
    );
  }
}
export default Register;
