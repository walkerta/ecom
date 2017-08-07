import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class BaseLayout extends Component {
  render() {
    return (
      <div className='test'>
        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">Mr. Tea</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Contact_Form">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
