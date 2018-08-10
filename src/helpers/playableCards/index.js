import cardNumberToInt from '../cardNumber/cardNumberToInt';

const getEdgeCards = (onArenaCards) => {
  const edgeOfEachSet = [];
  onArenaCards.map(({ type, cards }) => {
    edgeOfEachSet[type] = {
      leftEdge: cards.length > 0 ? cardNumberToInt(cards[0].number) : 0,
      rightEdge: cards.length > 0 ? cardNumberToInt(cards[cards.length - 1].number) : 14
    };
    return true;
  });
  return edgeOfEachSet;
};


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

  const edgeCards = getEdgeCards(onArenaCards);
  const newHandCards = onHandCards.map(currentCard => ({
    type: currentCard.type,
    number: currentCard.number,
    eligible: isEligible(currentCard, edgeCards),
    picked: currentCard.picked
  }));

  return newHandCards;
};

export default getPlayabeCards;
