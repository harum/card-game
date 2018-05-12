import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from 'react-slot';
import './style.scss';

const Table = ({ children }) => (
  <div className="c-table">
    <div className="c-table__left">
      <div className="c-table__left__card-holder">
        <Slot name="left" as="left" content={children} />
      </div>
    </div>
    <div className="c-table__middle">
      <div className="c-table__middle__top">
        <div className="c-table__middle__top__card-holder">
          <Slot name="top" as="top" content={children} />
        </div>
      </div>
      <div className="c-table__middle__bottom">
        <div className="c-table__middle__bottom__card-holder">
          <Slot name="bottom" as="bottom" content={children} />
        </div>
      </div>
    </div>
    <div className="c-table__right">
      <div className="c-table__right__card-holder">
        <Slot name="right" as="right" content={children} />
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
