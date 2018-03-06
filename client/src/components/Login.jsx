import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Checkbox, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './Home.css';
import axios from 'axios';
import UserStore from "../stores/UserStore";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser(),
      redirect: false,
      email: "",
      password: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }
  
  componentDidMount() {
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  userLogin(){
    let userEmail = this.state.email;
    let userPassword = this.state.password;
    axios.post(`http://localhost:8000/login`, {email: this.state.email, password: this.state.password})
      .then(res => {
        const userdata = res.data;
        UserStore.updateUser(userdata.user.email, userdata.token);
        const abc = UserStore.getUser();
        this.setState({ redirect: true })
        console.log(abc)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (
      <Grid>
        <Jumbotron>
          <h1> Login </h1>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <input type="email" value={this.state.email} onChange={this.handleEmail} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <input type="password" value={this.state.password} onChange={this.handlePassword} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="success" onClick={this.userLogin}>Login</Button>
              </Col>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Grid>
    )
  }
}