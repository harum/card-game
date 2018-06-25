import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getHandCardStyle = (numberOfCards, spread) => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`,
  display: spread ? 'block' : 'none'
});

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 10)}px`
});

const HandCards = ({ cards, spread, onCardClick }) => (
  <div
    className="c-hand-cards"
    style={getHandCardStyle(cards.length, spread)}
  >
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className="c-hand-cards__item"
          role="presentation"
          key={`${card.type}-${card.number}`}
          onClick={() => onCardClick(index)}
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
  spread: PropTypes.bool,
  onCardClick: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  spread: false,
  onCardClick: () => {}
};

export default HandCards;
