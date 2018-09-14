import cardDim from '../helpers/cardDimension';

const getCardStyle = (card, index) => ({
  zIndex: `${index}`,
  bottom: `${(card.picked ? cardDim.space : 0)}px`
});

export default getCardStyle;
