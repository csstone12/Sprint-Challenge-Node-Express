import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
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
