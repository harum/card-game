// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import ConfirmationPopup from './index';

// Story Config
const story = Lib.storiesOf('ConfirmationPopup', module);
story.addDecorator(Lib.withKnobs);

story.add('Default ConfirmationPopup', Lib.info()(() => (
  <ConfirmationPopup
    show
    eligible
    cancelCard={() => { Lib.action('button-click'); }}
    putCard={() => { Lib.action('button-click'); }}
    foldCard={() => { Lib.action('button-click'); }}
  />
)));
