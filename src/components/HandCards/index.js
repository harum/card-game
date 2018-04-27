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

const HandCards = ({ cards, updatePickedCard }) => {
  const handlePickHandCard = index => updatePickedCard(index);

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
              pickHandCard={() => handlePickHandCard(index)}
            />
          </div>
        ))
      }
    </div>
  );
};

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  updatePickedCard: PropTypes.func.isRequired
};

HandCards.defaultProps = {
  cards: []
};

export default HandCards;
