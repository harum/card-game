import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Table = ({
  handCards,
  deck,
  playButton,
  cardSets
}) => (
  <div className="c-table">
    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--top">
        top
      </div>
    </div>
    <div className="c-table__item" />

    <div className="c-table__item c-table__item--left">
      <div className="c-table__card-placeholder c-table__card-placeholder--left">
        left
      </div>
    </div>
    <div className="c-table__item">
      {deck}
      {cardSets}
    </div>
    <div className="c-table__item c-table__item--right">
      <div className="c-table__card-placeholder c-table__card-placeholder--right">
        right
      </div>
    </div>

    <div className="c-table__item">
      {playButton}
    </div>
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--bottom">
        {handCards}
      </div>
    </div>
    <div className="c-table__item" />
  </div>
);

Table.propTypes = {
  handCards: PropTypes.object.isRequired,
  deck: PropTypes.object.isRequired,
  playButton: PropTypes.object,
  cardSets: PropTypes.object
};

Table.defaultProps = {
  playButton: {},
  cardSets: []
};

export default Table;
