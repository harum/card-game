/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';
/* eslint-enable import/no-extraneous-dependencies */

import React, { Component } from 'react';

import Table from './components/Table';
import HandCards from './components/HandCards';
import EnemyHandCards from './components/EnemyHandCards';

const enemyCardsP1 = Array(3).fill({});
const enemyCardsP2 = Array(12).fill({});
const enemyCardsP3 = Array(14).fill({});
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }

  pickCard = (index) => {
    const tempCards = this.state.cards;
    tempCards[index].picked = !tempCards[index].picked;
    this.setState({ cards: tempCards });
  }

  render() {
    return (
      <div>
        <Table>
          <div
            className="slot-left"
            slot="left"
          >
            <HandCards
              cards={cards}
              onCardClicked={index => this.pickCard(index)}
            />
          </div>
          <div
            className="slot-right"
            slot="right"
          >
            <EnemyHandCards
              cards={enemyCardsP1}
            />
          </div>
          <div
            className="slot-top"
            slot="top"
          >
            <EnemyHandCards
              cards={enemyCardsP2}
            />
          </div>
          <div
            className="slot-bottom"
            slot="bottom"
          >
            <EnemyHandCards
              cards={enemyCardsP3}
            />
          </div>
        </Table>
      </div>
    );
  }
}

export default App;
