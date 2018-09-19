import { cardSet4 } from '../../dummy/cardSets';
import getEdges from './getEdges';

describe('Get edges of card set', () => {
  it('Get suitable edges', () => {
    expect(getEdges(cardSet4)).toEqual({
      club: {
        leftEdge: 0,
        rightEdge: 14
      },
      diamond: {
        leftEdge: 4,
        rightEdge: 13
      },
      heart: {
        leftEdge: 6,
        rightEdge: 7
      },
      spade: {
        leftEdge: 7,
        rightEdge: 12
      }
    });
  });
});
