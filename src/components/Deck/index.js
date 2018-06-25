import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const CARDS_IN_DECK = 13;
const TOP_DECK_MRGN = cardDim.oneHalfHeight / -2;
const LEFT_DECK_MRGN = cardDim.oneHalfWidth / -2;
const BOTTOM = (window.innerHeight / 2) + TOP_DECK_MRGN;
const LEFT_TRANSITION = cardDim.oneHalfWidth - (cardDim.oneHalfWidth - 30) - 1;

const getCardContainerClass = spread => classNames({ 'c-deck-container--spread': spread });

const getCardContainerStyle = showCard => ({ display: showCard ? 'none' : 'block' });

const getCardDeck = (spread) => {
  const cards = [];

  for (let i = 1; i <= CARDS_IN_DECK; i += 1) {
    const leftTransIndex = i - 7;
    const styles = spread ?
      { transform: `translate(${leftTransIndex * LEFT_TRANSITION}px ,${BOTTOM}px)` } : {};

    const el = (
      <div
        key={i}
        className="c-deck"
        style={{
          ...styles,
          marginTop: TOP_DECK_MRGN,
          marginLeft: LEFT_DECK_MRGN - (CARDS_IN_DECK - i)
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
