import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cardImage from '../../helpers/cardImage';
import cardColor from '../../helpers/cardColor';
import CardNumber from '../CardNumber';
import './style.scss';

const Card = ({
  type, number, onClick
}) => {
  const containerClass = classNames(
      'c-card',
      `c-card--${cardColor.getColor(type)}`
    );

  const pickCard = () => onClick();


  return (
    <div>
      { number !== '' ? (
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
      ) : (
        <div className="c-card-back" role="presentation" onClick={() => pickCard()} />
      )
    }
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  type: '',
  number: '',
  onClick: () => {}
};

export default Card;
