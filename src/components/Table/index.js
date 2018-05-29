import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from 'react-slot';
import './style.scss';


const Table = ({ children }) => (

  <div className="c-table">
    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--top">
        <Slot name="top" as="top" content={children} />
      </div>
    </div>
    <div className="c-table__item" />

    <div className="c-table__item c-table__item--left">
      <div className="c-table__card-placeholder c-table__card-placeholder--left">
        <Slot name="left" as="left" content={children} />
      </div>
    </div>
    <div className="c-table__item" />
    <div className="c-table__item c-table__item--right">
      <div className="c-table__card-placeholder c-table__card-placeholder--right">
        <Slot name="right" as="right" content={children} />
      </div>
    </div>

    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--bottom">
        <Slot name="bottom" as="bottom" content={children} />
      </div>
    </div>
    <div className="c-table__item" />
  </div>
);

Table.propTypes = {
  children: PropTypes.object.isRequired
};

Table.defaultProps = {
};

export default Table;
