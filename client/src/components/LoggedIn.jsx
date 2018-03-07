import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/CustomNavbar.css';
import UserStore from "../stores/UserStore";


export default class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {
      user: UserStore.getUser()
    }
  }
  onClickTest() {
    console.log('itworks')
  }
  render() {
    return (
      <NavItem eventKey={1} href="#">
          <Link className="userLogged" to="/All">{this.state.user.username}</Link>
          |
          <Link className="userLogged" to="/All">LOG OUT</Link>
      </NavItem>
    )
  }
}
