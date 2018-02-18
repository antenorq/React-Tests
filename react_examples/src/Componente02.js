import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Componente02 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Componente 02</h1>
        </header>
      </div>
    );
  }
}

export default Componente02;