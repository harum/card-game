import handCardsDummy, {
  aceDiamond,
  threeDiamond,
  sevenClub,
  aceSpade,
  fourSpade,
  kingSpade
} from '../../dummy/handCards';
import handCardsDummyResult from '../../dummy/handCardsResult';
import cardSets from '../../dummy/cardSets';

import playableCards from './index';

describe('Playable Card Function', () => {
  it('returns empty array if there is no hand cards', () => {
    expect(playableCards([], cardSets).length).toEqual(0);
  });

  it('returns false if card is not eligible', () => {
    expect(playableCards([fourSpade], cardSets)[0].eligible).toBe(false);
  });

  it('returns true for left edge checking', () => {
    expect(playableCards([threeDiamond], cardSets)[0].eligible).toBe(true);
  });

  it('returns true for right edge checking', () => {
    expect(playableCards([kingSpade], cardSets)[0].eligible).toBe(true);
  });

  it('returns true for seven card', () => {
    expect(playableCards([sevenClub], cardSets)[0].eligible).toBe(true);
  });

  it('returns true for right edge Ace', () => {
    expect(playableCards([aceDiamond], cardSets)[0].eligible).toBe(true);
  });

  it('returns false for left edge Ace', () => {
    expect(playableCards([aceSpade], cardSets)[0].eligible).toBe(false);
  });

  it('returns full set of playable hand cards', () => {
    expect(playableCards(handCardsDummy, cardSets)).toMatchObject(handCardsDummyResult);
  });
});
