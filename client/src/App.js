import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import PostBird from './components/PostBird';
import AllBirds from './components/AllBirds';
import Logout from './components/Logout';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/share_bird" component={PostBird} />
          <Route path="/birds" component={AllBirds} />
          <Route path="/logout" component={Logout} />



        </div>
      </Router>
    );
  }
}

export default App;
