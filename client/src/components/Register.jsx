import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Checkbox, Button, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './css/Home.css';
import axios from 'axios';
import UserStore from "../stores/UserStore";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser(),
      username: "",
      password: "",
      error: null,
      error2: null, 
      error3: null
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);

  }
  
  componentDidMount() {
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  registerUser(){
    axios.post(`http://localhost:8000/register`, {username: this.state.username, password: this.state.password})
      .then(res => {
        const userdata = res.data;
        UserStore.updateUser(userdata.user.id, userdata.user.username, userdata.token);
        this.setState({ redirect: true })
        console.log(userdata)
      })
      .catch(error => {
        this.setState({error: error.response.data.error});
        this.setState({error2: error.response.data.error2});
        this.setState({error3: error.response.data.error3});
        console.log(this.state.username)
        console.log(error.response.data.error)
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
          <h1> Register </h1>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <input type="text" value={this.state.username} onChange={this.handleUsername} />
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
                <Button bsStyle="success" onClick={this.registerUser}>Sign Up</Button>
              </Col>
            </FormGroup>
            <div> { this.state.error } </div>
            <div> { this.state.error2 } </div>
            <div> { this.state.error3 } </div>
          </Form>
        </Jumbotron>
      </Grid>
    )
  }
}