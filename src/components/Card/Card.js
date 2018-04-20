import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardImage from '../../helpers/cardImage';

import './style.scss';

const propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  render() {
    const { type, number } = this.props;

    return (
      <div className="c-card">
        <div className="c-card--corner c-card--corner-left">
          <span>{number}</span>
          <img src={cardImage.thumbnail(type)} alt={type} />
        </div>
        <img
          src={cardImage.mainImage(type, number)}
          alt={type}
          className="c-card--image"
        />
        <div className="c-card--corner c-card--corner-right">
          <span>{number}</span>
          <img src={cardImage.thumbnail(type)} alt={type} />
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;

export default Card;
