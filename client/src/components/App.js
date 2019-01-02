import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Register from "./Register";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import League from "./League";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/league" component={League} />
            <Route exact path="/profile" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
