import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Table = ({ children }) => (
  <div className="c-table">
    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--top">
        {children}
      </div>
    </div>
    <div className="c-table__item" />

    <div className="c-table__item c-table__item--left">
      <div className="c-table__card-placeholder c-table__card-placeholder--left">
        {children}
      </div>
    </div>
    <div className="c-table__item" />
    <div className="c-table__item c-table__item--right">
      <div className="c-table__card-placeholder c-table__card-placeholder--right">
        {children}
      </div>
    </div>

    <div className="c-table__item" />
    <div className="c-table__item">
      <div className="c-table__card-placeholder c-table__card-placeholder--bottom">
        {children}
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
