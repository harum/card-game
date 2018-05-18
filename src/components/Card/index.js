import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import cardColor from '../../helpers/cardColor';
import propsHelper from '../../helpers/propsHelper';
import CardNumber from '../CardNumber';
import './style.scss';

const Card = ({
  type,
  number,
  size
}) => {
  const containerClass = classNames(
    'c-card',
    `c-card--${cardColor.getColor(type)}`,
    `c-card--${size}`
  );

  const imageClass = classNames(
    'c-card__image',
    `c-card__image--${size}`
  );

  return (
    <div className={containerClass}>
      <div className="c-card__top">
        <CardNumber type={type} number={number} />
      </div>
      <img
        src={cardImage.mainImage(type, number)}
        alt={type}
        className={imageClass}
      />
      <div className="c-card__bottom">
        <CardNumber type={type} number={number} reverse />
      </div>
    </div>
  );
};

Card.propTypes = {
  ...propsHelper.cardBaseProps,
  size: PropTypes.string
};

Card.defaultProps = {
  size: ''
};

export default Card;
