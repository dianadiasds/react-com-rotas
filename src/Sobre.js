import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

class Sobre extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Sobre</h1>
                </header>
                <p className="App-intro">
                    <Link to="/"> Ir para a página Index</Link>
                </p>
            </div>
        );
    }
}

export default Sobre;
