import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  variant: PropTypes.string,
  content: PropTypes.string.isRequired
};

const defaultProps = {
  variant: ''
};

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const {
      variant,
      content
    } = this.props;

    const btnClass = `c-btn ${variant}`;

    return (
      <button
        className={btnClass}
      >
        {content}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
