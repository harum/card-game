import fullDeck from '../../dummy/fullDeck';
import {
  checkFirstTurn
} from './index';

const insertPlayerAndObject = (a, b) => (
  {
    cards: fullDeck.slice(a, b)
  }
);

const player1 = insertPlayerAndObject(0, 13);
const player2 = insertPlayerAndObject(13, 26);
const player3 = insertPlayerAndObject(26, 39);
const player4 = insertPlayerAndObject(39, 52);

describe('Check 1st Turn Player', () => {
  it('return true, 7spade on player1 cards expect player1', () => {
    expect(checkFirstTurn(player1, player2, player3, player4)).toEqual(player1);
  });
});
