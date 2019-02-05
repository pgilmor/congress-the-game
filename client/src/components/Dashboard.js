import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import * as actions from "../actions";

class Dashboard extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return [
          <div
            className="spinner-border text-primary center"
            role="status"
            key="1"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ];
      case false:
        return [<Redirect key="login" to={"/"} />];
      default:
        return [
          <div className="jumbotron" key="2">
            <h1 className="display-4">Hello,{this.props.user.first_name}!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead" />
          </div>
        ];
    }
  }
  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
