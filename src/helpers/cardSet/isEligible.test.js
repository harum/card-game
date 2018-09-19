import { cardSet4 } from '../../dummy/cardSets';
import isEligible from './isEligible';
import getEdges from './getEdges';

const eligibleCard = {
  type: 'diamond',
  number: '3'
};

const notEligibleCard = {
  type: 'diamond',
  number: '2'
};

const edges = getEdges(cardSet4);

describe('Check if card is eligible to play', () => {
  it('Check if eligible', () => {
    expect(isEligible(eligibleCard, edges)).toBe(true);
  });
  it('Check if not eligible', () => {
    expect(isEligible(notEligibleCard, edges)).toBe(false);
  });
});
