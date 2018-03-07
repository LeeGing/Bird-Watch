import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
import './css/CustomNavbar.css';
import { Link } from 'react-router-dom';
import UserStore from "../stores/UserStore";
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';



export default class CustomNavbar extends Component {
  constructor() {
    super();
    this.state = {
      user: UserStore.getUser()
    }
  }
  componentDidMount() {
    console.log(this.state.user)

  }
  render() {
    const userToken = this.state.user.token;
    let userLogged = <LoggedOut/>;
    if(userToken){
      userLogged = <LoggedIn/>
    }

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">BIRD WATCH</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/share_bird">Bird</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/login">{userLogged}</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
