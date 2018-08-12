import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Table = ({
  handCards, deck, playButton, enemy1Cards, enemy2Cards, enemy3Cards, cardSets
}) => (
  <div className="c-table">
    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--top">
        {enemy1Cards}
      </div>
    </div>
    <div className="c-table__item" />

    <div className="c-table__item c-table__item--left">
      <div className="c-table__card-placeholder c-table__card-placeholder--left">
        {enemy2Cards}
      </div>
    </div>
    <div className="c-table__item">
      {deck}
      {cardSets}
    </div>
    <div className="c-table__item c-table__item--right">
      <div className="c-table__card-placeholder c-table__card-placeholder--right">
        {enemy3Cards}
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
  enemy1Cards: PropTypes.object.isRequired,
  enemy2Cards: PropTypes.object.isRequired,
  enemy3Cards: PropTypes.object.isRequired,
  cardSets: PropTypes.object
};

Table.defaultProps = {
  playButton: {},
  cardSets: []
};

export default Table;
