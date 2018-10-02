import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import PopupContent from './PopupContent';

const ConfirmationPopup = ({
  cancelCard, show, eligible, putCard, foldCard, hasEligibleCard
}) => {
  const showHideClassName = show ? 'c-modal c-modal--block' : 'c-modal c-modal--none';

  return (
    <div className={showHideClassName}>
      <div className="c-modal-main">
        <PopupContent
          eligible={eligible}
          hasEligibleCard={hasEligibleCard}
          cancelCard={cancelCard}
          putCard={putCard}
          foldCard={foldCard}
        />
      </div>
    </div>
  );
};

ConfirmationPopup.propTypes = {
  eligible: PropTypes.bool.isRequired,
  foldCard: PropTypes.func.isRequired,
  cancelCard: PropTypes.func.isRequired,
  putCard: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  hasEligibleCard: PropTypes.bool.isRequired
};

export default ConfirmationPopup;
