import React, { Component } from 'react';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import CardNumber from './components/CardNumber';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Button
          content="Pencet Aku"
          variant="c-btn--red"
        />

        <div>
          <CardNumber number="2" type="spade" />
          <CardNumber number="2" type="spade" reverse />
        </div>
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
