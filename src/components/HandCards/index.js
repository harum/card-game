import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cardDim from '../../helpers/cardDimension';
import './style.scss';

const getHandCardStyle = numberOfCards => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`
});

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 0)}px`
});

const HandCards = ({ cards, onCardClicked }) => {
  const pickCard = index => onCardClicked(index);

  return (
    <div
      className="c-hand-cards"
      style={getHandCardStyle(cards.length)}
    >
      { cards.map((card, index) =>
        (
          <div
            style={getCardStyle(card, index)}
            className="c-hand-cards__item"
            key={`${card.type}-${card.number}`}
          >
            <Card
              type={card.type}
              number={card.number}
              onClick={() => pickCard(index)}
            />
          </div>
        ))
      }
    </div>
  );
};

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  onCardClicked: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  onCardClicked: () => {}
};

export default HandCards;
