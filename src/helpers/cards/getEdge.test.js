import getEdge from './getEdge';
import {
  diamondCards,
  clubCards,
  heartCards
} from '../../dummy/cards';

describe('Get edge cards', () => {
  it('Get suitable edge', () => {
    expect(getEdge(diamondCards)).toEqual({
      leftEdge: 4,
      rightEdge: 13
    });
  });
  it('Get suitable edge', () => {
    expect(getEdge(heartCards)).toEqual({
      leftEdge: 6,
      rightEdge: 7
    });
  });
  it('Get edge of empty cards', () => {
    expect(getEdge(clubCards)).toEqual({
      leftEdge: 0,
      rightEdge: 14
    });
  });
});
