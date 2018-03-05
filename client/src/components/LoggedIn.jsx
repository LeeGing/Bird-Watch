import React, { Component } from 'react';
import './CustomNavbar.css';
import { Link } from 'react-router-dom';
import UserStore from "../stores/UserStore";


export default class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {
      user: UserStore.getUser()
    }
  }
  render() {
    return (
      <div>
        {this.state.user.email} 
      </div>
    )
  }
}
