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
          <div>Fire, everything is on fire.</div>
          <Route exact path='/components/Home.js' Component = {Home} />
          <Route exact path='/components/Projects.js' Component = {Projects} />
        </div>
      </Router>
    );
  }
}

export default App;