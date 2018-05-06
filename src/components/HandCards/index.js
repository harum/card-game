import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';

const CARD_SPACE = 30;

const getCardStyle = (card, index) =>
  ({
    left: `${(index * CARD_SPACE)}px`,
    bottom: `${(card.picked ? CARD_SPACE : 0)}px`
  });

const HandCards = ({ cards, onCardClicked }) => (
  <div className="c-hand-cards">
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className="c-hand-cards__item"
          role="presentation"
          key={`${card.type}-${card.number}`}
          onClick={() => onCardClicked(index)}
        >
          <Card
            type={card.type}
            number={card.number}
          />
        </div>
      ))
    }
  </div>
);

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  onCardClicked: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  onCardClicked: () => {}
};

export default HandCards;
