import React, { Component } from 'react';
import './css/LoggedOut.css';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';


export default class LoggedOut extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <NavItem eventKey={1} href="#">
          <Link className="userLogged" to="/login">LOGIN</Link>
          |
          <Link className="userLogged" to="/register">SIGN UP</Link>
        </NavItem>
      </div>
    )
  }
}
