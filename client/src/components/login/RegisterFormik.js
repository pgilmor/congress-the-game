import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as actions from "../../actions";
import { connect } from "react-redux";
import history from "../history";

class RegisterFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: ""
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            this.props.registerUser(values, this.props.history);

            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required("Please enter your first name"),
          last_name: Yup.string().required("Please enter your last name"),
          username: Yup.string()
            .required("Please pick a username")
            .min(4, "Username must be between 4 and 24 characters")
            .max(24, "Username must be between 4 and 24 characters")
            .matches(
              /^[A-Za-z0-9_-]+$/,
              "Username may only contain letters, numbers, or underscores"
            ),
          email: Yup.string()
            .required("Please enter a valid email address")
            .email("Please enter a valid email address"),
          password: Yup.string()
            .required("Please pick a password")
            .min(8, "Password must be at least 8 characters")
            .max(100, "Password must be under 100 characters")
            .matches(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
              "Password must include one lowercase character, one uppercase character, a number, and a special character"
            )
        })}
        render={({ touched, errors, isSubmitting }) => (
          <Form>
            <div className="form-row">
              <div className="form-group col">
                <Field
                  type="text"
                  className="form-control"
                  name="first_name"
                  aria-describedby="first_name"
                  placeholder="First name"
                />
                {touched.first_name && errors.first_name && (
                  <div className="alert alert-danger" role="alert">
                    {errors.first_name}
                  </div>
                )}
              </div>
              <div className="form-group col">
                <Field
                  type="text"
                  className="form-control"
                  name="last_name"
                  aria-describedby="first_name"
                  placeholder="Last name"
                />
                {touched.last_name && errors.last_name && (
                  <p className="alert alert-danger" role="alert">
                    {errors.last_name}
                  </p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <Field
                  type="text"
                  className="form-control"
                  name="username"
                  aria-describedby="usernameHelp"
                  placeholder="Pick a username"
                />
                {touched.username && errors.username && (
                  <p className="alert alert-danger" role="alert">
                    {errors.username}
                  </p>
                )}
                <small id="emailHelp" className="form-text text-muted">
                  Username must be between 4 and 24 characters and can only
                  contain letters, numbers, or underscores
                </small>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {touched.email && errors.email && (
                  <p className="alert alert-danger" role="alert">
                    {errors.email}
                  </p>
                )}
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter a Password"
                />
              </div>
              <div className="form-group col">
                <Field
                  type="password"
                  className="form-control"
                  name="passwordMatch"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            {touched.password && errors.password && (
              <p className="alert alert-danger" role="alert">
                {errors.password}
              </p>
            )}
            <small id="emailHelp" className="form-text text-muted">
              Password must be at least 8 characters with one lowercase letter ,
              uppercase letter, a number, and a special character
            </small>
            <div className="form-group" />
            <div className="form-row">
              <div className="form-group col">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={
                    isSubmitting ||
                    !!(errors.email && touched.email) ||
                    !!(errors.password && touched.password) ||
                    !!(errors.username && touched.username) ||
                    !!(errors.first_name && touched.first_name) ||
                    !!(errors.last_name && touched.last_name)
                  }
                >
                  {isSubmitting ? "Please wait..." : "Register"}
                </button>
                <small id="termsHelp" className="form-text text-muted">
                  By registering you agree to the{" "}
                  <Link to="/terms">Terms and Conditions</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>.
                </small>
              </div>
            </div>
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
)(withRouter(RegisterFormik));
