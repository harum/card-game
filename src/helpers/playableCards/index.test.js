import playableCards from './index';
import handCardsDummy from '../../dummy/handCards';
import handCardsDummyResult from '../../dummy/handCardsResult';
import cardSets from '../../dummy/cardSets';

describe('Playable Card Function', () => {
  it('returns empty array if there is no hand cards', () => {
    expect(playableCards([], cardSets).length).toEqual(0);
  });

  it('returns full set of playable hand cards', () => {
    expect(playableCards(handCardsDummy, cardSets)).toMatchObject(handCardsDummyResult);
  });
});
