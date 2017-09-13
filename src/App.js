import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Bayode Aderinola</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Resume</NavItem>
              <NavItem eventKey={1} href="#">LinkedIn</NavItem>
              <NavItem eventKey={2} href="#">GitHub</NavItem>    
              <NavItem eventKey={2} href="#">Email</NavItem>          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <div>
          <h2><code>Some of my work...</code></h2>
        </div>

        <Navbar inverse fixedBottom>
          <Nav>
            <NavItem>
              <p>Copyright &copy; 2017 by Bayode Aderinola</p>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <div className="App-footer">
                <p className="App-credits"><code>Made with</code><img src={logo} className="App-logo" alt="logo" /></p>                
              </div>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
