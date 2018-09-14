import getEdge from './getEdge';
import {
  diamondCards,
  clubCards,
  heartCards
} from '../../dummy/cards';

const checkGetEdgeEqual = (cardSets, expected) => {
  expect(getEdge(cardSets)).toEqual(expected);
};

describe('Get edge cards', () => {
  it('Get suitable edge', () => {
    checkGetEdgeEqual(diamondCards, { leftEdge: 4, rightEdge: 13 });
  });
  it('Get suitable edge', () => {
    checkGetEdgeEqual(heartCards, { leftEdge: 6, rightEdge: 7 });
  });
  it('Get edge of empty cards', () => {
    checkGetEdgeEqual(clubCards, { leftEdge: 0, rightEdge: 14 });
  });
});
