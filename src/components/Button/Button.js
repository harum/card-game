import React, { Component } from 'react';

import './style.scss';

export default class Button extends Component {
  render() {
    const {
      variant,
      content,
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
