import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <Link to="/register">Register</Link>
          </li>,
          <li key="2">
            <Link to="/login">Login</Link>
          </li>
        ];
      default:
        return [
          <li key="3">
            <Link to="/profile">Profile</Link>
          </li>,
          <li key="4">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo">
          <Link
            to={this.props.user ? "/profile" : "/"}
            className="left brand-logo"
          >
            Congress: The Game
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
        {console.log(this.props.user)}
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
