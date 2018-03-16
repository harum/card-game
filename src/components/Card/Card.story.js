// Import Library
import Lib from '../../storybook_lib';
import React from 'react';

// Import Element(s)
import Card from './Card';

// Story Config
const story = Lib.storiesOf('Card', module);

// Default
story.add('Default', () => (<Card/>));
