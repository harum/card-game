/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import EnemyHandCards from './components/EnemyHandCards';
import Deck from './components/Deck';
import CardArena from './components/CardArena';
import ConfirmationPopup from './components/ConfirmationPopup';
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
      selectedCard: 0,
      selectedCardEligible: true,
      spread: false,
      showCard: false,
      showPopup: false
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

  getEnemyCards = (a, b, c) => (
    <EnemyHandCards
      cards={this.state.enemyCards.slice(a, b)}
      showCard={this.state.showCard}
      key={`${c}`}
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

  getConfirmationPopup = () => (
    <ConfirmationPopup
      show={this.state.showPopup}
      eligible={this.state.selectedCardEligible}
      cancelCard={this.cancelCard}
      putCard={this.putCardToArena}
      foldCard={this.foldCard}
    />
  )

  pickCard = (index) => {
    if (!this.state.cards[index].picked) {
      this.togglePickedCard(index);
      this.setState({ selectedCardEligible: this.state.cards[index].eligible });
      this.setState({ selectedCard: index });
      this.setState({ showPopup: true });
    } else {
      this.togglePickedCard(index);
    }
  }

  togglePickedCard = (index = this.state.selectedCard) => {
    const tempCards = this.state.cards;
    tempCards[index].picked = !tempCards[index].picked;
    this.setState({ cards: tempCards });
  }

  hideModal = () => {
    this.setState({ showPopup: false });
  }

  cancelCard = () => {
    this.togglePickedCard();
    this.hideModal();
  }

  putCardToArena = () => {
    console.log('put card');
    this.hideModal();
  }

  foldCard = () => {
    console.log('fold card');
    this.hideModal();
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
    // console.log(this.getHandCards());
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
          enemy1Cards={this.getEnemyCards(0, 13, 'enemy1HandCard')}
          enemy2Cards={this.getEnemyCards(13, 26, 'enemy2HandCard')}
          enemy3Cards={this.getEnemyCards(26, 39, 'enemy3HandCard')}
          popup={this.getConfirmationPopup()}
        />
      </div>
    );
  }
}

export default App;
