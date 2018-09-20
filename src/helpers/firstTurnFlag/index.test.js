import fullDeck from '../../dummy/fullDeck';
import checkFirstTurn from './index';
import shuffleDeck from '../../helpers/shuffleDeck';

const cardsFullRandomized = shuffleDeck(fullDeck);
const player1 = {
  cards: cardsFullRandomized.slice(0, 13),
  isFirstTurn: checkFirstTurn(cardsFullRandomized.slice(0, 13))
};
const player2 = {
  cards: cardsFullRandomized.slice(13, 26),
  isFirstTurn: checkFirstTurn(cardsFullRandomized.slice(13, 26))
};
const player3 = {
  cards: cardsFullRandomized.slice(26, 39),
  isFirstTurn: checkFirstTurn(cardsFullRandomized.slice(26, 39))
};
const player4 = {
  cards: cardsFullRandomized.slice(39, 52),
  isFirstTurn: checkFirstTurn(cardsFullRandomized.slice(39, 52))
};

const firstTurnPlayer = (a, b, c, d) => {
  if (a.isFirstTurn) {
    return a;
  } else if (b.isFirstTurn) {
    return b;
  } else if (c.isFirstTurn) {
    return c;
  } return d;
};
// const checkingFirstTurnPlayer = (a, b, c, d, expected) => {
//   expect(tes(a, b, c, d)).toBe(expected);
// };

describe('Check 1st Turn Player', () => {
  it('return true, check 1st turn player contains 7spade', () => {
    expect(checkFirstTurn(firstTurnPlayer(player1, player2, player3, player4).cards)).toEqual(true);
  });
});
