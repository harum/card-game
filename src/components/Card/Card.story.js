// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import Card from './index';

// Story Config
const story = Lib.storiesOf('Card', module);
story.addDecorator(Lib.withKnobs);

const numOptions = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '4',
  9: '5',
  J: 'J',
  Q: 'Q',
  K: 'K',
  A: 'A'
};

const typeOptions = {
  spade: 'spade',
  heart: 'heart',
  club: 'club',
  diamond: 'diamond'
};

story.add('Default Card', () => {
  const num = Lib.select('number', numOptions, 'A');
  const type = Lib.select('type', typeOptions, 'spade');

  return (
    <Card
      type={type}
      number={num}
    />
  );
});
