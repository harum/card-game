// Import Library
import React from 'react';
import Lib from '../../storybook_lib';

// Import Element(s)
import Button from './index';

// Story Config
const story = Lib.storiesOf('Button', module);
story.addDecorator(Lib.withKnobs);

const colorOptions = {
  sec: 'sec',
  blue: 'blue',
  green: 'green',
  red: 'red',
  black: 'black'
};

story.add('Default Button', Lib.info()(() => {
  const color = Lib.select('color', colorOptions, 'sec');

  return (
    <Button
      text="Button"
      color={color}
      onClick={() => { Lib.action('button-click'); }}
    />
  );
}));
