// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import Card from './Card';

// Story Config
const story = Lib.storiesOf('Card', module);

// Default
story.add('Default', () => (<Card />));
