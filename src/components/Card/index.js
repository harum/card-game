import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import cardColor from '../../helpers/cardColor';
import CardNumber from '../CardNumber';
import './style.scss';

const Card = ({ type, number, onCardClicked }) => {
  const containerClass = classNames(
    'c-card',
    `c-card--${cardColor.getColor(type)}`
  );

  const pickCard = () => onCardClicked();

  return (
    <div>
      <div className={containerClass} role="presentation" onClick={() => pickCard()}>
        <div className="c-card__top">
          <CardNumber type={type} number={number} />
        </div>
        <img
          src={cardImage.mainImage(type, number)}
          alt={type}
          className="c-card__image"
        />
        <div className="c-card__bottom">
          <CardNumber type={type} number={number} reverse />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onCardClicked: PropTypes.func.isRequired
};

export default Card;
