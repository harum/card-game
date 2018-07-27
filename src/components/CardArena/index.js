import React from 'react';
import PropTypes from 'prop-types';
import CardSet from '../CardSet';
import './style.scss';

const CardArena = ({ cardSets }) => (
  <div
    className="c-card-arena"
  >
    {
      cardSets.map(cardSet => (
        <div className="c-card-arena__section">
          <div className="c-card-arena__cards">
            <CardSet
              cards={cardSet.cards}
              key={cardSet.type}
            />
          </div>
        </div>
      ))
    }
  </div>
);

CardArena.propTypes = {
  cardSets: PropTypes.arrayOf(PropTypes.object)
};

CardArena.defaultProps = {
  cardSets: []
};

export default CardArena;
