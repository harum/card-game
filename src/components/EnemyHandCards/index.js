import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getEnemyHandCardstyle = (numberOfCards, showCard) => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`,
  display: showCard ? 'block' : 'none'
});

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 0)}px`
});

const EnemyHandCards = ({ cards, showCard }) => (
  <div
    className="c-hand-cards"
    style={getEnemyHandCardstyle(cards.length, showCard)}
  >
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className="c-hand-cards__item"
          role="presentation"
          key={`${card.type}-${card.number}`}
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

EnemyHandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  showCard: PropTypes.bool,
};

EnemyHandCards.defaultProps = {
  cards: [],
  showCard: false,
};

export default EnemyHandCards;
