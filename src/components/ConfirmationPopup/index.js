import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Button from '../Button';

const ConfirmationPopup = ({ handleClose, show, eligible }) => {
  const showHideClassName = show ? 'c-modal c-modal--block' : 'c-modal c-modal--none';
  const modalText = eligible ? 'Put this card in the arena?' : 'Fold this card?';

  return (
    <div className={showHideClassName}>
      <div className="c-modal__main">
        <h4>{modalText}</h4>
        <Button text="Cancel" onClick={handleClose} />
        { eligible ?
          (<Button text="Put" onClick={handleClose} color="blue" />) :
          (<Button text="Fold" onClick={handleClose} color="red" />)
        }
      </div>
    </div>
  );
};

ConfirmationPopup.propTypes = {
  eligible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ConfirmationPopup;
