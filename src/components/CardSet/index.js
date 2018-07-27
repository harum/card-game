import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';

const getCardStyle = (card, index) => ({
  zIndex: `${index}`
});

const CardSet = ({ cards }) => (
  <div
    className="c-card-set"
  >
    { cards.map((card, index) =>
      (
        <div
          style={getCardStyle(card, index)}
          className="c-card-set__item"
          key={`${card.type}-${card.number}`}
        >
          <Card
            type={card.type}
            number={card.number}
            size="small"
          />
        </div>
      ))
    }
  </div>
);

CardSet.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

CardSet.defaultProps = {
  cards: []
};

export default CardSet;
