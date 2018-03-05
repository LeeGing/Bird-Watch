import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import UserStore from "../stores/UserStore";

export default class Home extends Component {
  componentDidMount() {
    UserStore.getUser();
  }
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to BIRDWATCH </h2>
          <p> This is how we do it! </p>
          <Link to="/about">
            <Button bsStyle="success"> About </Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}