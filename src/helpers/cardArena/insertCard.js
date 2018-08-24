const insertCard = (card, cardSets) => {
  const newSets = cardSets.slice();
  const suitableSet = cardSets.find(set => set.type === card.type);
  suitableSet.cards.push(card);
  suitableSet.cards.sort((a, b) => a.number - b.number);

  return newSets;
};

export default insertCard;
