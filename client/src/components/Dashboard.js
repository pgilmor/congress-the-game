import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
// import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
