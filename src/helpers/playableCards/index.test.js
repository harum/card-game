import handCardsDummyFull, {
  handCardsDummySeven,
  aceDiamond,
  threeDiamond,
  sevenClub,
  aceSpade,
  fourSpade,
  kingSpade
} from '../../dummy/handCards';
import {
  resultFull,
  resultOnlySeven
} from '../../dummy/handCardsResult';
import cardSets, {
  emptyCardSet
} from '../../dummy/cardSets';

import playableCards from './index';

const checkSingleCardToBe = (card, expected) => {
  expect(playableCards([card], cardSets)[0].eligible).toBe(expected);
};

describe('Playable Card Function', () => {
  it('returns empty array if there is no hand cards', () => {
    expect(playableCards([], cardSets).length).toEqual(0);
  });

  it('returns false if card is not eligible', () => {
    checkSingleCardToBe(fourSpade, false);
  });

  it('returns true for left edge checking', () => {
    checkSingleCardToBe(threeDiamond, true);
  });

  it('returns true for right edge checking', () => {
    checkSingleCardToBe(kingSpade, true);
  });

  it('returns true for seven card', () => {
    checkSingleCardToBe(sevenClub, true);
  });

  it('returns true for right edge Ace', () => {
    checkSingleCardToBe(aceDiamond, true);
  });

  it('returns false for left edge Ace', () => {
    checkSingleCardToBe(aceSpade, false);
  });

  it('returns true for only seven cards', () => {
    expect(playableCards(handCardsDummySeven, emptyCardSet)).toMatchObject(resultOnlySeven);
  });

  it('returns full set of playable hand cards', () => {
    expect(playableCards(handCardsDummyFull, cardSets)).toMatchObject(resultFull);
  });
});
