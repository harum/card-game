import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getHandCardStyle = (numberOfCards, showCard) => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`,
  display: showCard ? 'block' : 'none'
});

const getHandCardItemClass = isDisabled => (classNames(
  'c-hand-cards__item',
  { 'c-hand-cards__item--disabled': isDisabled }
));

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 0)}px`
});

const HandCards = ({ cards, showCard, onCardClick }) => (
  <div
    className="c-hand-cards"
    style={getHandCardStyle(cards.length, showCard)}
  >
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className={getHandCardItemClass(card.isDisabled)}
          role="presentation"
          key={`${card.type}-${card.number}`}
          onClick={() => (card.isDisabled ? false : onCardClick(index))}
        >
          <Card
            type={card.type}
            number={card.number}
            isDisabled={card.isDisabled}
          />
        </div>
      ))
    }
  </div>
);

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  showCard: PropTypes.bool,
  onCardClick: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  showCard: false,
  onCardClick: () => {}
};

export default HandCards;
