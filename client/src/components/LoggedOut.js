import React, { Component } from 'react';
import './CustomNavbar.css';
import { Link } from 'react-router-dom';
import UserStore from "../stores/UserStore";
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


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
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem eventKey={1} href="#">
          <Link to="/register">Sign Up</Link>
        </NavItem>
      </div>
    )
  }
}
