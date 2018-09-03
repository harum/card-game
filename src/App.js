/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import EnemyHandCards from './components/EnemyHandCards';
import Deck from './components/Deck';
import CardArena from './components/CardArena';
import cardSets from './dummy/cardSets';
import handCardsDummy from './dummy/handCards';
import enemyHandCardsDummy from './dummy/enemyHandCards';
import playableCards from './helpers/playableCards';

// const socket = io('http://localhost:8080');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: playableCards(handCardsDummy, cardSets),
      enemyCards: enemyHandCardsDummy,
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

  getEnemy1Cards = () => (
    <EnemyHandCards
      cards={this.state.enemyCards.slice(0, 13)}
      showCard={this.state.showCard}
    />
  )

  getEnemy2Cards = () => (
    <EnemyHandCards
      cards={this.state.enemyCards.slice(13, 26)}
      showCard={this.state.showCard}
    />
  )

  getEnemy3Cards = () => (
    <EnemyHandCards
      cards={this.state.enemyCards.slice(26, 39)}
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
    console.log(this.getHandCards());
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
          enemy1Cards={this.getEnemy1Cards()}
          enemy2Cards={this.getEnemy2Cards()}
          enemy3Cards={this.getEnemy3Cards()}
        />
      </div>
    );
  }
}

export default App;
