import fullDeck from '../../dummy/fullDeck';
import isContainsCard from './index';

const player1 = fullDeck.slice(0, 13);

describe('Check cards contain a card', () => {
  it('true, player1 contains 7spade', () => {
    expect(isContainsCard(player1, 'spade', '7')).toEqual(true);
  });
  it('true, player1 contains 8 spade', () => {
    expect(isContainsCard(player1, 'spade', '8')).toEqual(true);
  });
  it('true, player1 contains Jack spade', () => {
    expect(isContainsCard(player1, 'spade', 'J')).toEqual(true);
  });
  it('false, player1 contains Jack diamond', () => {
    expect(isContainsCard(player1, 'diamond', '7')).toEqual(false);
  });
  it('false, player1 contains 10 diamond', () => {
    expect(isContainsCard(player1, 'diamond', '10')).toEqual(false);
  });
});
