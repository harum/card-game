const diamondCards = [
  {
    type: 'diamond',
    number: 'A'
  },
  {
    type: 'diamond',
    number: '2'
  },
  {
    type: 'diamond',
    number: '3'
  },
  {
    type: 'diamond',
    number: '4'
  },
  {
    type: 'diamond',
    number: '5'
  },
  {
    type: 'diamond',
    number: '6'
  },
  {
    type: 'diamond',
    number: '7'
  },
  {
    type: 'diamond',
    number: '8'
  },
  {
    type: 'diamond',
    number: '9'
  },
  {
    type: 'diamond',
    number: '10'
  },
  {
    type: 'diamond',
    number: 'J'
  },
  {
    type: 'diamond',
    number: 'Q'
  },
  {
    type: 'diamond',
    number: 'K'
  }
];

const clubCards = [
  {
    type: 'club',
    number: '7'
  },
  {
    type: 'club',
    number: '8'
  },
  {
    type: 'club',
    number: '9'
  },
  {
    type: 'club',
    number: '10'
  }
];

const heartCards = [
  {
    type: 'heart',
    number: '6'
  },
  {
    type: 'heart',
    number: '7'
  },
  {
    type: 'heart',
    number: '8'
  },
  {
    type: 'heart',
    number: '9'
  },
  {
    type: 'heart',
    number: '10'
  },
  {
    type: 'heart',
    number: 'J'
  }
];

const spadeCards = [
  {
    type: 'spade',
    number: '7'
  },
  {
    type: 'spade',
    number: '8'
  },
  {
    type: 'spade',
    number: '9'
  },
  {
    type: 'spade',
    number: '10'
  },
  {
    type: 'spade',
    number: 'J'
  },
  {
    type: 'spade',
    number: 'Q'
  },
  {
    type: 'spade',
    number: 'K'
  }
];

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

const cardSet1 = [diamondSet];
const cardSet2 = cardSet1.concat(clubSet);
const cardSet3 = cardSet2.concat(heartSet);
const cardSet4 = cardSet3.concat(spadeSet);

export {
  cardSet1,
  cardSet2,
  cardSet3,
  cardSet4
};

export default cardSet4;