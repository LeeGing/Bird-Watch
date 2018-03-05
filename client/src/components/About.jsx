import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import UserStore from "../stores/UserStore";
import LoggedIn from './LoggedIn';



export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser()
    }
  }
  createUser() {
    axios.post(`http://localhost:8000/register`, {email: '123@test.com', password: '12345678'})
      .then(res => {
        const userdata = res.data;
        console.log(userdata)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  componentDidMount() {
    console.log("ABOUTPAGE", this.state.user)
    console.log("this.state.user", this.state.user.token)
  }

  render() {
    const userToken = this.state.user.token;
    let renderation = null;
    if(userToken){
      renderation = <LoggedIn/>
    }
    return (
      <Grid>
        <Jumbotron>
          {renderation}
          <h1> ABC </h1>
          <h2> ABOUT PAGE</h2>
          <p> About Bird Watch </p>
          <Link to="/about">
            <Button bsStyle="success"> About </Button>
          </Link>
          <Button onClick={this.createUser}>SendJSON</Button>
        </Jumbotron>
      </Grid>
    )
  }
}