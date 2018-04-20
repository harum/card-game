import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './abc.scss';

import Button from './components/Button/Button';
import Card from './components/Card/Card';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Card Game</h1>
        </header>
        <p className="App-intro u-fg--red">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button
          content="Pencet Aku"
          variant="c-btn--red"
        />

        <div>
          <Card number="2" type="spade" />
          <Card number="4" type="heart" />
          <Card number="6" type="club" />
          <Card number="8" type="diamond" />
          <Card number="J" type="diamond" />
          <Card number="Q" type="diamond" />
          <Card number="K" type="diamond" />
          <Card number="A" type="diamond" />
        </div>

      </div>
    );
  }
}

export default App;
