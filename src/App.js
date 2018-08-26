import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Index</h1>
        </header>
        <p className="App-intro">
            <Link to="/sobre"> Ir para a página Sobre</Link>
        </p>
      </div>
    );
  }
}

export default App;
