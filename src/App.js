/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import EnemyHandCards from './components/EnemyHandCards';
import Deck from './components/Deck';
import CardArena from './components/CardArena';
import cardSets from './dummy/cardSets';
// import handCardsDummy from './dummy/handCards';
// import handCardsDummyFull from './dummy/handCards';
// import enemyHandCardsDummy from './dummy/enemyHandCards';
import playableCards from './helpers/playableCards';
import shuffleDeck from './helpers/shuffleDeck';
import addEnemyCards from './helpers/addEnemyCard';
import fullDeck from './dummy/fullDeck';

// const socket = io('http://localhost:8080');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: playableCards(shuffleDeck(fullDeck), cardSets),
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
  getEnemyCards = (a, b) => (
    <EnemyHandCards
      cards={addEnemyCards(a)}
      showCard={this.state.showCard}
      key={`${b}`}
    />
  );

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
    // console.log(this.getHandCards());
    // socket.on('cards', (data) => {;
    //   this.setState({
    //     cards: playableCards(data, cardSets)
    //   });
    // });
    // console.log('tes', this.state.cards);
    return (
      <div>
        <Table
          deck={this.getDeck()}
          handCards={this.getHandCards()}
          playButton={this.getPlayButton()}
          cardSets={this.getCardSets()}
          enemy1Cards={this.getEnemyCards(13, 'enemy1HandCard')}
          enemy2Cards={this.getEnemyCards(13, 'enemy2HandCard')}
          enemy3Cards={this.getEnemyCards(13, 'enemy3HandCard')}
        />
      </div>
    );
  }
}

export default App;
