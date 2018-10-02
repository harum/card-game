import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card';
import getCardStyle from '../../helpers/cardStyle';
import getHandCardStyle from '../../helpers/handCardStyle';
import './style.scss';

const HandCards = ({
  cards, showCard, hasEligibleCard, onCardClick
}) => {
  const getHandCardItemClass = eligible => classNames('c-hand-cards__item', {
    'c-hand-cards__item--no-hover': !eligible && hasEligibleCard
  });

  const getOverlayClass = eligible => classNames({
    'c-hand-cards__overlay': !eligible
  });

  return (
    <div
      className="c-hand-cards"
      style={getHandCardStyle(cards.length, showCard)}
    >
      { cards.map((card, index) =>
        (
          <div
            style={getCardStyle(card, index)}
            className={getHandCardItemClass(card.eligible)}
            role="presentation"
            key={`${card.type}-${card.number}`}
            onDoubleClick={() => onCardClick(index)}
          >
            <Card
              type={card.type}
              number={card.number}
            />
            <div className={getOverlayClass(card.eligible)} />
          </div>
        ))
      }
    </div>
  );
};

HandCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  showCard: PropTypes.bool,
  hasEligibleCard: PropTypes.bool,
  onCardClick: PropTypes.func
};

HandCards.defaultProps = {
  cards: [],
  showCard: false,
  hasEligibleCard: false,
  onCardClick: () => {}
};

export default HandCards;
