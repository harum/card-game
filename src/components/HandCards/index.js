import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';

const CARD_SPACE = 30;

const getCardStyle = (card, index) =>
  ({
    zIndex: `${index}`,
    bottom: `${(card.picked ? CARD_SPACE : 0)}px`
  });

const HandCards = ({ cards, onCardClicked }) => {
  const pickCard = index => onCardClicked(index);

  return (
    <div className="c-hand-cards">
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
