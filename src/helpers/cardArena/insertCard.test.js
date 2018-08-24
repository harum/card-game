import insertCard from './insertCard';
import { emptyCardSet } from '../../dummy/cardSets';
import { heartCards } from '../../dummy/cards';

const card = {
  type: 'diamond',
  number: '7'
};

const newHeart = {
  type: 'heart',
  number: '5'
};

const cardSet2 = [
  {
    type: 'diamond',
    cards: []
  },
  {
    type: 'club',
    cards: []
  },
  {
    type: 'heart',
    cards: heartCards
  },
  {
    type: 'spade',
    cards: []
  }
];

describe('Insert Card', () => {
  it('Insert first card', () => {
    expect(insertCard(card, emptyCardSet)).toEqual([
      {
        type: 'diamond',
        cards: [
          {
            type: 'diamond',
            number: '7'
          }
        ]
      },
      {
        type: 'club',
        cards: []
      },
      {
        type: 'heart',
        cards: []
      },
      {
        type: 'spade',
        cards: []
      }
    ]);
  });

  it('Insert other card', () => {
    expect(insertCard(newHeart, cardSet2)).toEqual([
      {
        type: 'diamond',
        cards: []
      },
      {
        type: 'club',
        cards: []
      },
      {
        type: 'heart',
        cards: [
          {
            type: 'heart',
            number: '5'
          },
          {
            type: 'heart',
            number: '6'
          },
          {
            type: 'heart',
            number: '7'
          }
        ]
      },
      {
        type: 'spade',
        cards: []
      }
    ]);
  });
});

