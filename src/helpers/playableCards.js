const conversion = {
  A: 1,
  J: 11,
  Q: 12,
  K: 13
};

const toNumber = (num) => {
  let result = parseInt(num, 10);
  if (Number.isNaN(result)) {
    result = conversion[num];
  }
  return result;
};


const getEdgeCards = (onArenaCards) => {
  const edgeOfEachSet = [];
  onArenaCards.map(({ type, cards }) => {
    edgeOfEachSet[type] = {
      first: cards.length > 0 ? toNumber(cards[0].number) : 0,
      last: cards.length > 0 ? toNumber(cards[cards.length - 1].number) : 14
    };
    return true;
  });
  return edgeOfEachSet;
};


const isEligible = (currentCard, edgeCards) => {
  const cardValue = toNumber(currentCard.number);
  if (cardValue === 7) {
    return true;
  } else if (cardValue < 7) {
    return cardValue + 1 === edgeCards[currentCard.type].first;
  } else if (cardValue > 7) {
    return cardValue - 1 === edgeCards[currentCard.type].last;
  }
  return false;
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
