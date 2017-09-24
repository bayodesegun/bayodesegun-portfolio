import React, { Component } from 'react';
import logo from './images/logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class Footer extends Component {
  render() {
    const portfolio = "<PORTFOLIO />";
    return (
      <div className="App">
        <Navbar inverse fixedBottom>
          <Nav>
            <NavItem>
              <p>Copyright &copy; 2017 Bayode Aderinola</p>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <div className="App-footer">
                <p className="App-credits"><code>{portfolio}</code>  made with <img src={logo} className="App-logo" alt="logo" /></p>                
              </div>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
