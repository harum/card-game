/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import Deck from './components/Deck';
import CardArena from './components/CardArena';
import cardSets from './dummy/cardSets';
import handCardsDummy from './dummy/handCards';
import enemyHandCards from './dummy/enemyHandCards';
import playableCards from './helpers/playableCards';

// const socket = io('http://localhost:8080');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: playableCards(handCardsDummy, cardSets),
      enemyCards: enemyHandCards,
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
      cards={this.state.cards}
      showCard={this.state.showCard}
      onCardClick={index => this.pickCard(index)}
    />
  )

  getEnemyCards = () => (
    <HandCards
      cards={this.state.enemyCards}
      showCard={this.state.showCard}
    />
  )

  getPlayButton = () => (
    <button onClick={this.spreadCards}>
      Spread Card!
    </button>
  )

  getCardSets = () => (
    <CardArena
      cardSets={cardSets}
    />
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
    // socket.on('cards', (data) => {
    //   this.setState({
    //     cards: playableCards(data, cardSets)
    //   });
    // });

    return (
      <div>
        <Table
          deck={this.getDeck()}
          handCards={this.getHandCards()}
          playButton={this.getPlayButton()}
          cardSets={this.getCardSets()}
          enemy1Cards={this.getEnemyCards()}
          enemy2Cards={this.getEnemyCards()}
          enemy3Cards={this.getEnemyCards()}
        />
      </div>
    );
  }
}

export default App;
