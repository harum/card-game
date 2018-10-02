import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ActionContent from './ActionContent';

const PopupContent = ({
  cancelCard, eligible, putCard, foldCard, hasEligibleCard
}) => {
  const content = () => {
    if (hasEligibleCard) {
      if (eligible) {
        return (<ActionContent
          action={putCard}
          text="Put this card in the arena?"
          buttonText="Put"
          cancelCard={cancelCard}
        />);
      }

      return (
        <div>
          <h4>You still have eligible card!</h4>
          <Button text="OK" onClick={cancelCard} />
        </div>
      );
    }

    return (<ActionContent
      action={putCard}
      text="Fold this card?"
      buttonText="Fold"
      cancelCard={foldCard}
    />);
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
