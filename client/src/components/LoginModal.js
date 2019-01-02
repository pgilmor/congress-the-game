import React, { Component } from "react";

import Login from "./Login";

class LoginModal extends Component {
  render() {
    return (
      <div className="modal-dialog" role="document">
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
            <Login />
          </div>
          <div className="modal-footer">
            <small className="form-text text-muted">
              New user? <a href="/register">Register</a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginModal;
