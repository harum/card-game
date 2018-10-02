import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const ActionContent = ({
  action, text, buttonText, cancelCard
}) => (
  <div>
    <h4>{text}</h4>
    <Button text="Cancel" onClick={cancelCard} />
    <Button text={buttonText} onClick={action} color={buttonText === 'Put' ? 'blue' : 'red'} />
  </div>
);

ActionContent.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  cancelCard: PropTypes.func.isRequired
};

export default ActionContent;
