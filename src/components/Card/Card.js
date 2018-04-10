import React, { Component } from 'react';
import PropTypes from 'prop-types';

import club from '../../assets/images/club.svg';
import diamond from '../../assets/images/diamond.svg';
import heart from '../../assets/images/heart.svg';
import spade from '../../assets/images/spade.svg';

import './style.scss';

const propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  getSource() {
    const { type } = this.props;

    switch (type) {
    case 'club':
      return club;
    case 'diamond':
      return diamond;
    case 'heart':
      return heart;
    case 'spade':
      return spade;
    default:
      return '';
    }
  }

  render() {
    const { type, number } = this.props;

    return (
      <div className="c-card">
        <div className="c-card--corner c-card--corner-left">
          <span>{number}</span>
          <img src={this.getSource()} alt={type} />
        </div>
        <img
          src={this.getSource()}
          alt={type}
          className="c-card--image"
        />
        <div className="c-card--corner c-card--corner-right">
          <span>2</span>
          <img src={this.getSource()} alt={type} />
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;

export default Card;
