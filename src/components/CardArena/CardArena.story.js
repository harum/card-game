// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

import {
  cardSet1,
  cardSet2,
  cardSet3,
  cardSet4
} from '../../dummy/cardSets';

// Import Element(s)
import CardArena from './index';

// Story Config
const story = Lib.storiesOf('Card Arena', module);
story.addDecorator(Lib.withKnobs);

const cardSetsOptions = {
  opt1: cardSet1,
  opt2: cardSet2,
  opt3: cardSet3,
  opt4: cardSet4
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
