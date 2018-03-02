import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to BIRDWATCH </h2>
          <p> This is how we do it! </p>
        </Jumbotron>
      </Grid>
    )
  }
}