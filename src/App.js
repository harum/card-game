/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';
/* eslint-enable import/no-extraneous-dependencies */

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import Deck from './components/Deck';


const cards = [
  {
    type: 'spade',
    number: '1',
    eligible: true,
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
    picked: false
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
    type: 'spade',
    number: '10',
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      spread: false
    };
  }

  pickCard = (index) => {
    const tempCards = this.state.cards;
    tempCards[index].picked = !tempCards[index].picked;
    this.setState({ cards: tempCards });
  }

  spreadCards = () => {
    this.setState({
      spread: !this.state.spread
    });
  }

  render() {
    return (
      <div>
        <Table
          handCards={<HandCards
            cards={cards}
            spread={this.state.spread}
            onCardClick={index => this.pickCard(index)}
          />}
          deck={
            <Deck
              spread={this.state.spread}
            />
          }
          playButton={
            <button onClick={this.spreadCards}>
              {this.state.spread ? 'Collect Card!' : 'Spread Card!'}
            </button>
          }
        />
      </div>
    );
  }
}

export default App;
