/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';
/* eslint-enable import/no-extraneous-dependencies */

import React, { Component } from 'react';

import Button from './components/Button/Button';
import HandCards from './components/HandCards';

const cards = [
  {
    type: 'spade',
    number: '1',
    eligible: false,
    picked: false
  },
  {
    type: 'heart',
    number: '2',
    eligible: false,
    picked: false
  },
  {
    type: 'club',
    number: '3',
    eligible: false,
    picked: false
  },
  {
    type: 'diamond',
    number: '4',
    eligible: false,
    picked: false
  },
  {
    type: 'heart',
    number: '5',
    eligible: false,
    picked: false
  },
  {
    type: 'spade',
    number: '6',
    eligible: true,
    picked: true
  },
  {
    type: 'heart',
    number: '7',
    eligible: false,
    picked: false
  },
  {
    type: 'club',
    number: '8',
    eligible: false,
    picked: false
  },
  {
    type: 'diamond',
    number: '9',
    eligible: true,
    picked: false
  },
  {
    type: 'heart',
    number: 'J',
    eligible: false,
    picked: false
  },
  {
    type: 'club',
    number: 'Q',
    eligible: true,
    picked: false
  },
  {
    type: 'diamond',
    number: 'K',
    eligible: false,
    picked: false
  }
];

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }

  handleUpdatePickedCard = (index) => {
    const tempCards = this.state.cards;
    tempCards[index].picked = !tempCards[index].picked;
    this.setState({ cards: tempCards });
  }

  render() {
    return (
      <div>
        <Button
          content="Pencet Aku"
          variant="c-btn--red"
        />

        <div>
          <HandCards cards={cards} updatePickedCard={index => this.handleUpdatePickedCard(index)} />
        </div>
      </div>
    );
  }
}

export default App;
