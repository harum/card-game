import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getCardContainerClass = spread => classNames({ 'c-deck-container--spread': spread });

const getCardContainerStyle = showCard => ({ display: showCard ? 'none' : 'block' });

const getCardDeck = (spread) => {
  const cards = [];
  const cardsInDeck = 13;
  const baseTopDeckMargin = cardDim.oneHalfHeight / -2;
  const baseLeftDeckMargin = cardDim.oneHalfWidth / -2;
  const bottomTable = (window.innerHeight / 2) + baseTopDeckMargin;
  const baseLeftTrans = cardDim.oneHalfWidth - (cardDim.oneHalfWidth - 30) - 1;

  for (let i = 1; i <= cardsInDeck; i += 1) {
    const leftTransIndex = i - 7;
    const styles = spread ?
      { transform: `translate(${leftTransIndex * baseLeftTrans}px ,${bottomTable}px)` } : {};

    const el = (
      <div
        key={i}
        className="c-deck"
        style={{
          ...styles,
          marginTop: baseTopDeckMargin,
          marginLeft: baseLeftDeckMargin - (cardsInDeck - i)
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

const Deck = ({ spread, showCard }) => (
  <div
    className={getCardContainerClass(spread)}
    style={getCardContainerStyle(showCard)}
  >
    {getCardDeck(spread)}
  </div>
);

Deck.propTypes = {
  spread: PropTypes.bool,
  showCard: PropTypes.bool
};

Deck.defaultProps = {
  spread: false,
  showCard: false
};

export default Deck;
