// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import CardSet from './index';
import cardSets from '../../dummy/cardSets';

// Story Config
const story = Lib.storiesOf('Card Set', module);
story.addDecorator(Lib.withKnobs);

story.add('Card Set', Lib.info()(() => <CardSet cards={cardSets[0].cards} />));
