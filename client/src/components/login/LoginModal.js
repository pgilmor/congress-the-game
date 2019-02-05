import React, { Component } from "react";

import FormikLogin from "./LoginForm";
import Register from "./Register";
class LoginModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign in
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FormikLogin />
          </div>
          <div className="modal-footer">
            <small className="form-text text-muted">
              New user?{" "}
              <button
                type="submit"
                data-toggle="modal"
                data-target="#registerModal"
              >
                Register
              </button>
            </small>
          </div>
          <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
          >
            <Register />
          </div>
        </div>
      </div>
    );
  }
}
export default LoginModal;
