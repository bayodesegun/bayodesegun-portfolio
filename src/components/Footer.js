import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedBottom>
          <Navbar.Header>
            <Navbar.Brand className="small-header">
              <p> &copy; 2017-2023 Bayode Aderinola </p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <div className="App-footer">
                  <p className="App-credits"><code>Made with</code> <img src={logo} className="App-logo" alt="logo" /></p>
                </div>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
