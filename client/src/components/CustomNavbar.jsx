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
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/birds">All</Link>
            </NavItem>
            <NavItem>
              <Link to="/share_bird">Share</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            {userLogged}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
