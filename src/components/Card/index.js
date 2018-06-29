import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import cardColor from '../../helpers/cardColor';
import propsHelper from '../../helpers/propsHelper';
import CardNumber from '../CardNumber';
import './style.scss';

const Card = ({
  isDisabled,
  type,
  number,
  size
}) => {
  const containerClass = classNames(
    'c-card',
    `c-card--${cardColor.getColor(type)}`,
    `c-card--${size}`,
    { 'c-card--disabled': isDisabled }
  );

  const backContainerClass = classNames(
    'c-card-back',
    { 'c-card-back--disabled': isDisabled }
  );

  const imageClass = classNames(
    'c-card__image',
    `c-card__image--${size}`
  );

  const getDisableOverlay = () => {
    if (isDisabled) {
      return (<div className="c-card__overlay" />);
    }
    return '';
  };

  return (
    <div>
      { number !== '' && type !== '' ? (
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
      ) : (
        <div className={backContainerClass} />
      )
      }
      {getDisableOverlay()}
    </div>
  );
};

Card.propTypes = {
  ...propsHelper.cardBaseProps,
  isDisabled: PropTypes.bool,
  size: PropTypes.string
};

Card.defaultProps = {
  isDisabled: false,
  size: ''
};

export default Card;
