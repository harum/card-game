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
    picked: false,
    isDisabled: false
  },
  {
    type: 'heart',
    number: '2',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'club',
    number: '3',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'diamond',
    number: '4',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'heart',
    number: '5',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'spade',
    number: '6',
    eligible: true,
    picked: false,
    isDisabled: false
  },
  {
    type: 'heart',
    number: '7',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'club',
    number: '8',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'diamond',
    number: '9',
    eligible: true,
    picked: false,
    isDisabled: false
  },
  {
    type: 'spade',
    number: '10',
    eligible: true,
    picked: false,
    isDisabled: false
  },
  {
    type: 'heart',
    number: 'J',
    eligible: false,
    picked: false,
    isDisabled: false
  },
  {
    type: 'club',
    number: 'Q',
    eligible: true,
    picked: false,
    isDisabled: false
  },
  {
    type: 'diamond',
    number: 'K',
    eligible: false,
    picked: false,
    isDisabled: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      spread: false,
      showCard: false
    };
  }

  getDeck = () => (
    <Deck
      spread={this.state.spread}
      showCard={this.state.showCard}
    />
  )

  getHandCards = () => (
    <HandCards
      cards={cards}
      showCard={this.state.showCard}
      onCardClick={index => this.pickCard(index)}
    />
  )

  getPlayButton = () => (
    <button onClick={this.spreadCards}>
      Spread Card!
    </button>
  )

  pickCard = (index) => {
    const tempCards = this.state.cards;
    tempCards[index].picked = !tempCards[index].picked;
    this.setState({ cards: tempCards });
  }

  spreadCards = () => {
    this.setState({
      spread: true
    });
    setTimeout(
      () => this.setState({
        showCard: true
      }),
      1200
    );
  }

  render() {
    return (
      <div>
        <Table
          deck={this.getDeck()}
          handCards={this.getHandCards()}
          playButton={this.getPlayButton()}
        />
      </div>
    );
  }
}

export default App;
