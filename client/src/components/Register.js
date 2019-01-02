import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container w-75">
        <form method="post" action="/user/register" className="col s12">
          <h4>Register for a free account</h4>
          <div class="form-row">
            <div class="form-group col">
              <input
                type="text"
                class="form-control"
                name="first_name"
                placeholder="First name"
              />
            </div>
            <div class="form-group col">
              <input
                type="text"
                class="form-control"
                name="last_name"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <input
                type="text"
                class="form-control"
                name="usernameReg"
                aria-describedby="usernameHelp"
                placeholder="Pick a username"
              />
              <small id="emailHelp" class="form-text text-muted">
                Username must be between 4 and 24 characters and can only
                contain letters, numbers, or underscores
              </small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <input
                type="email"
                class="form-control"
                name="emailReg"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col">
              <input
                type="password"
                class="form-control"
                name="passwordReg"
                placeholder="Enter a Password"
              />
              <small id="emailHelp" class="form-text text-muted">
                Password must be at least 8 characters with one lowercase letter
                , uppercase letter, a number, and a special character
              </small>
            </div>
            <div class="form-group col">
              <input
                type="password"
                class="form-control"
                name="passwordMatch"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
