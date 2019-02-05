import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return [
          <LinkContainer key="1" to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>,
          <LinkContainer key="2" to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        ];
      default:
        return [
          <LinkContainer key="3" to="/league">
            <NavItem>Leagues</NavItem>
          </LinkContainer>,
          <NavDropdown
            key="4"
            title={this.props.user[0].username}
            id="basic-nav-dropdown"
          >
            <LinkContainer key="4.1" to="/profile">
              <MenuItem>Profile</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <MenuItem key="4.2" href="api/logout">
              Logout
            </MenuItem>
          </NavDropdown>
        ];
    }
  }
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link
              to={this.props.user ? "/profile" : "/"}
              className="left brand-logo"
            >
              {console.log(this.props)}
              Congress: The Game
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>{this.renderContent()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
