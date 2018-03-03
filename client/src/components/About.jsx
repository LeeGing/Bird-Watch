import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> ABOUT PAGE</h2>
          <p> About Bird Watch </p>
          <Link to="/about">
            <Button bsStyle="success"> About </Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}