import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const Button = ({ onClick, color, text }) => {
  const buttonClass = classNames(
    'c-btn',
    `c-btn--${color}`,
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      { text }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  text: PropTypes.string
};

Button.defaultProps = {
  color: 'sec',
  text: 'Button'
};

export default Button;
