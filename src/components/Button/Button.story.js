// Import Library
import Lib from '../../storybook_lib';
import React from 'react';

// Import Element(s)
import Button from './Button';

// Story Config
const story = Lib.storiesOf('Button', module);
story.addDecorator(Lib.withKnobs);

// General options for knobs
const sizeOptions = {
  'c-btn--tiny': 'tiny',
  'c-btn--small': 'small',
  'c-btn': 'default',
  'c-btn--large': 'large',
};

// Default
story.add('Default', () => {
  const content = 'Tombol';
  const variant = 'c-btn--red';

  return (
    <Button
      content={content}
      variant={variant}
    />
  );
});

// Size variant
story.add('Size variant', () => {
  const content = 'Tombol';
  const color = 'c-btn--red';
  const size = Lib.select('size', sizeOptions, 'c-btn');

  const variantClass = `${color} ${size}`;

  return (
    <Button
      content={content}
      variant={variantClass}
    />
  );
});
