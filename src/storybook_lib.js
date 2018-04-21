import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, number, boolean, array, select } from '@storybook/addon-knobs';

const StoryBook = {
  storiesOf,
  action,
  linkTo,
  withNotes,
  withKnobs,
  text,
  number,
  boolean,
  array,
  select
};

export default StoryBook;