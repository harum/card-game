import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import propsHelper from '../../helpers/propsHelper';
import './style.scss';

const CardNumber = ({ type, number, reverse }) => {
  const containerClass = classNames('c-card-number', {
    'c-card-number--reverse': reverse
  });

  return (
    <div className={containerClass} >
      <span>{number}</span>
      <img
        className="c-card-number__image"
        src={cardImage.thumbnail(type)}
        alt={type}
      />
    </div>
  );
};

CardNumber.propTypes = {
  ...propsHelper.cardBaseProps,
  reverse: PropTypes.bool
};

CardNumber.defaultProps = {
  reverse: false
};

export default CardNumber;
