import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as actions from "../../actions";
import { connect } from "react-redux";
import history from "../history";

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            this.props.loginUser(values, this.props.history);

            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(
            "Please enter your username or e-mail and try again"
          ),
          password: Yup.string().required(
            "Please enter your password and try again"
          )
        })}
        render={({ touched, errors, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username or E-mail Address</label>
              <Field
                type="text"
                className="form-control"
                name="username"
                aria-describedby="username"
                placeholder="Username or E-mail"
              />
              {touched.username && errors.username && (
                <p className="alert alert-danger" role="alert">
                  {errors.username}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <p className="alert alert-danger" role="alert">
                  {errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              {isSubmitting ? "Please wait..." : "Sign in"}
            </button>
            <small id="termsHelp" className="form-text text-muted">
              By logging in you agree to the{" "}
              <Link to="/terms">Terms and Conditions</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </small>
          </Form>
        )}
      />
    );
  }
}

function mapStateToProps({ user }) {
  return { user, history: history };
}
export default connect(
  mapStateToProps,
  actions
)(withRouter(LoginForm));
