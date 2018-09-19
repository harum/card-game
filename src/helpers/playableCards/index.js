import getEdges from '../cardSet/getEdges';
import isEligible from '../cardSet/isEligible';

const getPlayabeCards = (onHandCards, onArenaCards) => {
  if (onHandCards.length === 0) {
    return [];
  }

  const edgeCards = getEdges(onArenaCards);
  const newHandCards = onHandCards.map(currentCard => ({
    type: currentCard.type,
    number: currentCard.number,
    eligible: isEligible(currentCard, edgeCards),
    picked: currentCard.picked
  }));

  return newHandCards;
};

export default getPlayabeCards;
