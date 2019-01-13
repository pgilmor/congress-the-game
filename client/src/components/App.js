import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Register from "./login/Register";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./login/Login";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import League from "./League";
import NotFound from "./404";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log(this.props.user);
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/league" component={League} />,
              <PrivateRoute exact path="/profile" component={Dashboard} />
              <Route exact path="/" component={Landing} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps({ user }) {
  return { user };
}
export default connect(
  mapStateToProps,
  actions
)(App);
