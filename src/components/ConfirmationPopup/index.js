import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Button from '../Button';

const ConfirmationPopup = ({
  cancelCard, show, eligible, putCard, foldCard
}) => {
  const showHideClassName = show ? 'c-modal c-modal--block' : 'c-modal c-modal--none';
  const modalText = eligible ? 'Put this card in the arena?' : 'Fold this card?';

  return (
    <div className={showHideClassName}>
      <div className="c-modal-main">
        <h4>{modalText}</h4>
        <Button text="Cancel" onClick={cancelCard} />
        { eligible ?
          (<Button text="Put" onClick={putCard} color="blue" />) :
          (<Button text="Fold" onClick={foldCard} color="red" />)
        }
      </div>
    </div>
  );
};

ConfirmationPopup.propTypes = {
  eligible: PropTypes.bool.isRequired,
  foldCard: PropTypes.func.isRequired,
  cancelCard: PropTypes.func.isRequired,
  putCard: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ConfirmationPopup;
