import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const PopupContent = ({
  cancelCard, eligible, putCard, foldCard, hasEligibleCard
}) => {
  const content = () => {
    if (hasEligibleCard) {
      if (eligible) {
        return (
          <div>
            <h4>Put this card in the arena?</h4>
            <Button text="Cancel" onClick={cancelCard} />
            <Button text="Put" onClick={putCard} color="blue" />
          </div>
        );
      }

      return (
        <div>
          <h4>You still have eligible card!</h4>
          <Button text="OK" onClick={cancelCard} />
        </div>
      );
    }

    return (
      <div>
        <h4>Fold this card?</h4>
        <Button text="Cancel" onClick={cancelCard} />
        <Button text="Fold" onClick={foldCard} color="red" />
      </div>
    );
  };

  return content();
};

PopupContent.propTypes = {
  eligible: PropTypes.bool.isRequired,
  foldCard: PropTypes.func.isRequired,
  cancelCard: PropTypes.func.isRequired,
  putCard: PropTypes.func.isRequired,
  hasEligibleCard: PropTypes.bool.isRequired
};

export default PopupContent;
