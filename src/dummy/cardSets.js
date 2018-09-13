import {
  diamondCards,
  clubCards,
  heartCards,
  spadeCards
} from './cards';

const diamondSet = {
  type: 'diamond',
  cards: diamondCards
};

const clubSet = {
  type: 'club',
  cards: clubCards
};

const heartSet = {
  type: 'heart',
  cards: heartCards
};

const spadeSet = {
  type: 'spade',
  cards: spadeCards
};

const emptyCardSet = [
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
    cards: []
  },
  {
    type: 'spade',
    cards: []
  }
];

const cardSet1 = [diamondSet];
const cardSet2 = cardSet1.concat(clubSet);
const cardSet3 = cardSet2.concat(heartSet);
const cardSet4 = cardSet3.concat(spadeSet);

const cardSets = cardSet4;

export {
  cardSet1,
  cardSet2,
  cardSet3,
  cardSet4,
  emptyCardSet
};

export default cardSets;
