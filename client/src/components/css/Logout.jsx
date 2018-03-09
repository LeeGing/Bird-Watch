import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import UserStore from "../stores/UserStore";



export default class LoggedOut extends Component {
  componentDidMount() {
    UserStore.updateUser()
    UserStore.updateUser(null, null, null);
  }
  render() {
    return (
        <Redirect to='/'/>
    )
  }
}
