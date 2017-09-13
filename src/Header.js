import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Bayode Aderinola</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Resume</NavItem>
              <NavItem eventKey={2} href="#">LinkedIn</NavItem>
              <NavItem eventKey={3} href="#">GitHub</NavItem>    
              <NavItem eventKey={4} href="#">Email</NavItem>          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
