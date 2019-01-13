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
          <li key="2" className="nav-item ">
            <Link className="nav-link" to="/login">
              Login
            </Link>
            {console.log(this.props)}
          </li>,
          <li key="2.1" className="nav-item ">
            <Link className="nav-link" to="/register">
              Register
            </Link>
            {console.log(this.props)}
          </li>
        ];
      default:
        return [
          <li key="3" className="nav-item">
            <Link className="nav-link " to="/league">
              Leagues
            </Link>
          </li>,
          <li key="4" className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {console.log(this.props.user)}
              {this.props.user.username}
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/api/logout">
                Sign Out
              </a>
            </div>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav
        className="container navbar navbar-expand-lg navbar-light"
        id="mainNav"
      >
        <Link to={this.props.user ? "/profile" : "/"} className="navbar-brand">
          Congress: The Game
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
