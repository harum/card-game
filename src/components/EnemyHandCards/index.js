import React from 'react';
import PropTypes from 'prop-types';
import CardBack from '../CardBack';
import './style.scss';


const CARD_SPACE = 30;

const getCardStyle = (card, index) =>
  ({
    left: `${(index * CARD_SPACE)}px`,
    bottom: `${(card.picked ? CARD_SPACE : 0)}px`
  });

const HandCards = ({ cards }) => (
  <div className="c-hand-cards">
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className="c-hand-cards__item"
        >
          <CardBack />
        </div>
        ))
      }
  </div>
  );

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

HandCards.defaultProps = {
  cards: []
};

export default HandCards;
