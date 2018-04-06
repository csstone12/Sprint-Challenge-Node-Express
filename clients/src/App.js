import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' Component = {Home} />
          <Route exact path='/projects' Component = {Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
