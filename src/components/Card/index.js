import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import cardColor from '../../helpers/cardColor';
import CardNumber from '../CardNumber';
import './style.scss';

const Card = ({ type, number }) => {
  const containerClass = classNames(
    'c-card',
    `c-card--${cardColor.getColor(type)}`
  );

  return (
    <div>
      <div className={containerClass}>
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
  number: PropTypes.string.isRequired
};

export default Card;