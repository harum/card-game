import cardNumberToInt from '../cardNumber/cardNumberToInt';

const isEligible = (currentCard, edges) => {
  let result = false;
  const cardValue = cardNumberToInt(currentCard.number);
  const { leftEdge, rightEdge } = edges[currentCard.type];

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

export default isEligible;
