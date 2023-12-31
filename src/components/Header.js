import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import NavItem from './NavItem/NavItem.js';
import Resume from '../docs/Resume.pdf';


class Header extends Component {
  render() {
    const brand = "Bayode Aderinola";
    return (
      <div className="App">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className="big-header">
              <a href="/"><code>{brand}</code></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href={Resume} title="PDF resume" target="_blank"><i className="fa fa-book fa-fw fa-2x"></i></NavItem>
              <NavItem eventKey={2} href="https://www.linkedin.com/in/bayodesegun" title="LinkedIn profile" target="_blank" ><i className="fa fa-linkedin-square fa-fw fa-2x"></i></NavItem>
              <NavItem eventKey={3} href="https://www.github.com/bayodesegun" title="GitHub profile" target="_blank" ><i className="fa fa-github fa-fw fa-2x"></i></NavItem>
              <NavItem eventKey={4} href="mailto:bayodesegun@bayodesegun.com" title="Shoot me an email!"><i className="fa fa-envelope-o fa-fw fa-2x"></i></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
