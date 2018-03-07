import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Button, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import './css/PostBird.css';
import axios from 'axios';
import UserStore from "../stores/UserStore";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser(),
      birdPost: {
        name: "",
        description: "",
        location: "",
        image: "",
        userId: "",
        username: ""
      }
    }
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.registerBird = this.registerBird.bind(this);

    // this.registerUser = this.registerUser.bind(this);

  }
  
  componentDidMount() {
    this.handleUser(this.state.user.id, this.state.user.email)
    console.log(this.state.user.id)
  }

  handleName(event) {
    this.setState({birdPost: {
                    name: event.target.value,
                    description: this.state.birdPost.description,
                    location: this.state.birdPost.location,
                    image: this.state.birdPost.image,
                    userId: this.state.birdPost.userId,
                    username: this.state.birdPost.username
                    }
                  });
  }
  handleDescription(event) {
    this.setState({birdPost: {
                    name: this.state.birdPost.name,
                    description: event.target.value,
                    location: this.state.birdPost.location,
                    image: this.state.birdPost.image,
                    userId: this.state.birdPost.userId,
                    username: this.state.birdPost.username
                    }
                  });
  }
  handleLocation(event) {
    this.setState({birdPost: {
                    name: this.state.birdPost.name,
                    description: this.state.birdPost.description,
                    location: event.target.value,
                    image: this.state.birdPost.image,
                    userId: this.state.birdPost.userId,
                    username: this.state.birdPost.username
                    }

                  });
  }
  handleImage(event) {
    this.setState({birdPost: {
                    name: this.state.birdPost.name,
                    description: this.state.birdPost.description,
                    location: this.state.birdPost.location,
                    image: event.target.value,
                    userId: this.state.birdPost.userId,
                    username: this.state.birdPost.username
                    }
                  });
  }
  handleUser(userId, username) {
    this.setState({birdPost: {
                    name: this.state.birdPost.name,
                    description: this.state.birdPost.description,
                    location: this.state.birdPost.location,
                    image: this.state.birdPost.image,
                    userId: userId,
                    username: username
                    }
                  });
  }

  registerBird(){
    console.log(this.state.birdPost.name)
    axios.post(`http://localhost:8000/birds`, this.state.birdPost)
      .then(res => {
        const userdata = res.data;
        console.log(userdata)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1> Share Bird </h1>
          <h1> {this.state.birdPost.name} </h1>
          <h1> {this.state.birdPost.description} </h1>
          <h1> {this.state.birdPost.location} </h1>
          <h1> {this.state.birdPost.image} </h1>


          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={5}>
                Name
              </Col>
              <Col sm={1}>
                <input type="text" value={this.state.birdPost.name} onChange={this.handleName} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={5}>
                Description
              </Col>
              <Col sm={1}>
                <input type="text" value={this.state.birdPost.description} onChange={this.handleDescription} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={5}>
                Location
              </Col>
              <Col sm={1}>
                <input type="text" value={this.state.birdPost.location} onChange={this.handleLocation} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={5}>
                Image
              </Col>
              <Col sm={1}>
                <input type="text" value={this.state.birdPost.image} onChange={this.handleImage} />
              </Col>
            </FormGroup>

            <div className="displayNone" >
              <input type="text" value={this.state.birdPost.userId} />
            </div>

            <FormGroup>
              <Col sm={12}>
                <Button bsStyle="success" onClick={this.registerBird}>Share</Button>
              </Col>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Grid>
    )
  }
}