import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getHandCardStyle = numberOfCards => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`,
  display: 'none'
});

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 0)}px`
});

const HandCards = ({ cards, onCardClick }) => (
  <div
    className="c-hand-cards"
    style={getHandCardStyle(cards.length)}
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
  onCardClick: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  onCardClick: () => {}
};

export default HandCards;
