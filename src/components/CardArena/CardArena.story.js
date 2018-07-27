// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import CardArena from './index';

// Story Config
const story = Lib.storiesOf('Card Arena', module);
story.addDecorator(Lib.withKnobs);

const diamondCards = [
  {
    type: 'diamond',
    number: '1'
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
