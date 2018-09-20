import fullDeck from '../../dummy/fullDeck';
import checkFirstTurn from './index';
import shuffleDeck from '../../helpers/shuffleDeck';

const cardsFullRandomized = shuffleDeck(fullDeck);

const insertPlayerAndObject = (a, b) => (
  {
    cards: cardsFullRandomized.slice(a, b),
    isFirstTurn: checkFirstTurn(cardsFullRandomized.slice(a, b))
  }
);

const player1 = insertPlayerAndObject(0, 13);
const player2 = insertPlayerAndObject(13, 26);
const player3 = insertPlayerAndObject(26, 39);
const player4 = insertPlayerAndObject(39, 52);

const firstTurnPlayer = (a, b, c, d) => {
  if (a.isFirstTurn) {
    return a;
  } else if (b.isFirstTurn) {
    return b;
  } else if (c.isFirstTurn) {
    return c;
  } return d;
};

describe('Check 1st Turn Player', () => {
  it('return true, check 1st turn player contains 7spade', () => {
    expect(checkFirstTurn(firstTurnPlayer(player1, player2, player3, player4).cards)).toEqual(true);
  });
});
