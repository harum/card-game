import cardNumberToInt from '../cardNumber/cardNumberToInt';

const getEdge = cards => ({
  leftEdge: cards.length > 0 ? cardNumberToInt(cards[0].number) : 0,
  rightEdge: cards.length > 0 ? cardNumberToInt(cards[cards.length - 1].number) : 14
});

export default getEdge;
