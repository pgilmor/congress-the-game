import React, { Component } from "react";
// function errors() {
//   if (!errors) {
//     return null;
//   } else {
//     return <ul>errors.map((error)=>{<li>error.message</li>})</ul>;
//   }
// }

class Register extends Component {
  render() {
    return (
      <div className="container row">
        <form method="post" action="/user/register" className="col s12">
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
                id="email"
                name="email"
                type="email"
                className="validate"
                //required
              />
              <label htmlFor="email">Email </label>
              <span
                className="helper-text"
                data-error="Email must be valid and between 4 and 100 characters"
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
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                className="validate"
                id="passwordMatch"
                name="passwordMatch"
              />

              <label htmlFor="passwordMatch">Confirm Password</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
