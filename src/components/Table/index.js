import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Table = ({ children }) => (
  <div className="c-table">
    <div className="c-table__left">
      <div className="c-table__left-card-holder">
        {children}
      </div>
    </div>
    <div className="c-table__middle">
      <div className="c-table__middle-top">
        <div className="c-table__middle-top-card-holder">
          {children}
        </div>
      </div>
      <div className="c-table__middle-bottom">
        <div className="c-table__middle-bottom-card-holder">
          {children}
        </div>
      </div>
    </div>
    <div className="c-table__right">
      <div className="c-table__right-card-holder">
        {children}
      </div>
    </div>
  </div>
);

Table.propTypes = {
  children: PropTypes.object.isRequired
};

Table.defaultProps = {
};

export default Table;
