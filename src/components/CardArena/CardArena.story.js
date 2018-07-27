// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

import {
  diamondCards,
  clubCards,
  heartCards,
  spadeCards
} from '../../dummy/cardSets';

// Import Element(s)
import CardArena from './index';

// Story Config
const story = Lib.storiesOf('Card Arena', module);
story.addDecorator(Lib.withKnobs);


const cardSets1 = [
  {
    type: 'diamond',
    cards: diamondCards
  },
  {
    type: 'club',
    cards: clubCards
  },
  {
    type: 'heart',
    cards: heartCards
  },
  {
    type: 'spade',
    cards: spadeCards
  }
];

const cardSets2 = [
  {
    type: 'diamond',
    cards: diamondCards
  },
  {
    type: 'heart',
    cards: heartCards
  },
  {
    type: 'spade',
    cards: spadeCards
  }
];

const cardSets3 = [
  {
    type: 'diamond',
    cards: diamondCards
  },
  {
    type: 'heart',
    cards: heartCards
  }
];

const cardSets4 = [
  {
    type: 'heart',
    cards: heartCards
  }
];

const cardSetsOptions = {
  opt1: cardSets1,
  opt2: cardSets2,
  opt3: cardSets3,
  opt4: cardSets4
};

const opts = {
  opt1: 'opt1',
  opt2: 'opt2',
  opt3: 'opt3',
  opt4: 'opt4'
};

const getSets = opt =>
  cardSetsOptions[opt];

story.add('Card Arena', () => {
  const opt = Lib.select('cardSets', opts, 'opt1');

  return (
    <CardArena
      cardSets={getSets(opt)}
    />
  );
});
