import cardNumberToInt from '../cardNumber/cardNumberToInt';
import getEdges from '../cardSet/getEdges';

const isEligible = (currentCard, edgeCards) => {
  let result = false;
  const cardValue = cardNumberToInt(currentCard.number);
  const { leftEdge, rightEdge } = edgeCards[currentCard.type];

  if (cardValue === 7) {
    result = true;
  } else if (cardValue === 1) {
    result = leftEdge === 2 || rightEdge === 13;
  } else if (cardValue < 7) {
    result = cardValue + 1 === leftEdge;
  } else if (cardValue > 7) {
    result = cardValue - 1 === rightEdge;
  }
  return result;
};


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
