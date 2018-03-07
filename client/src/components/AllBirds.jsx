import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './css/AllBirds.css';
import axios from 'axios';

export default class AllBirds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: []
    }
    this.getBirds = this.getBirds.bind(this);
  }
  getBirds() {
    axios.get(`http://localhost:8000/birds`)
      .then(res => {
        const birdData = res.data;
        this.setState({ birds: birdData})
        console.log(birdData)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  componentDidMount() {
    this.getBirds();
  }

  render() {
    return (
      <Grid>
          {this.state.birds.map((bird) => {
            return (
              <div key={bird.id}>
                <Jumbotron>
                  <img className="z-depth-5" src={bird.image}/>
                  <p> Species: {bird.name} </p>
                  <p> Description: {bird.description} </p>
                  <p> Location: {bird.location} </p>
                  <p> User: {bird.userId} </p>
                  <p> Username: {bird.username} </p>
                </Jumbotron>
              </div> 
              )}
            )}
          
      </Grid>
    )
  }
}