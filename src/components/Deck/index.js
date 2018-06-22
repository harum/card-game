import React from 'react';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const cardDeck = () => {
  const cards = [];
  const cardsInDeck = 13;

  for (let i = 1; i <= cardsInDeck; i += 1) {
    const el = (
      <div
        key={i}
        className="c-deck"
        style={{
          position: 'absolute',
          marginTop: cardDim.oneHalfHeight / -2,
          marginLeft: (cardDim.oneHalfWidth / -2) - (cardsInDeck - i)
        }}
      >
        <Card
          type=""
          number=""
        />
      </div>
    );
    cards.push(el);
  }
  return cards;
};

const Deck = () => (
  <div>
    {cardDeck()}
  </div>
);

export default Deck;
