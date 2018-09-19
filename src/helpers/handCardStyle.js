import cardDim from '../helpers/cardDimension';

const getHandCardStyle = (numberOfCards, showCard) => ({
  width: `${(cardDim.space * (numberOfCards - 1)) + cardDim.oneHalfWidth}px`,
  display: showCard ? 'block' : 'none'
});

export default getHandCardStyle;
