import { cloneDeep } from 'lodash';
import getEdges from '../cardSet/getEdges';
import isEligible from '../cardSet/isEligible';

const insertCard = (card, cardSets) => {
  const newSets = cloneDeep(cardSets);
  const edges = getEdges(newSets);

  if (isEligible(card, edges)) {
    const suitableSet = newSets.find(set => set.type === card.type);
    suitableSet.cards.push(card);
    suitableSet.cards.sort((a, b) => a.number - b.number);
  }

  return newSets;
};

export default insertCard;
