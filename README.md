
# Card Game
Multiplayer card game, just for fun.

## Feature plan
For first game, we will implement sevens card game.

## Technology
Game server
-  [ ] use [socket.io](https://github.com/socketio/socket.io/)
-  [ ] use [expressjs](https://expressjs.com/)

Game client
-  [ ] use [socket.io-client](https://github.com/socketio/socket.io-client)
-  [ ] use react [react](https://reactjs.org/)
-  [ ] use [webpack](https://webpack.js.org/)

## Todo list
-  [ ]  add storybook
-  [ ]  svg card icon
-  [ ]  what font to use
- [ ]  UI Component
  -  [ ] card component
  -  [ ] deck component
  -  [ ] table component
  -  [ ]  shuffle animation

Game Logic
-  [ ] game protocol

## Inspiration link
- [design](https://www.behance.net/gallery/19253089/Flat-design-Playing-Cards)
- [design 2](https://dribbble.com/shots/2146249-Playing-Cards-Material-Design/attachments/393159)

- [design 3 - ingame ui](https://codepen.io/devildrey33/pen/xELXRa)
- [design 4 - card and board ui](https://lh3.ggpht.com/GNftqAU9b07Xo26fc2LES3UX9A2yoQm9JAngtOM8vy-bkJvGw7Lmy7SLQ2hwyUZsgQxx=h310)

## Storybook
We use [Storybook](https://storybook.js.org/basics/introduction/) as a tool for documenting our components.

### Installation
just run:
```
npm install
npm run storybook
```

Storybook will run at `http://localhost:9001`

### Add Story
We create a story for one component. So each component will have its own story.

1. In the component folder, make a file with name: `[component-name].story.js`
2. Import required Library
3. Import the component
4. Register the story
5. Add stories!

Example for Button component
```
// Import Library
import Lib from '../../storybook_lib';
import React from 'react';

// Import Element(s)
import Button from './Button';

// Story Config
const story = Lib.storiesOf('Button', module);

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
```

### Using Knobs
We can use knobs to to edit React props dynamically and see how it works.

Storybook provide several knobs we can use, such as `text, number, boolean, array, select` and others.

Documentation about knobs is available in [knobs documentation](https://github.com/storybooks/storybook/blob/master/addons/knobs/README.md).

Here, this is how we use knobs.

1. Add config in our story file
```
...

// Story Config
const story = Lib.storiesOf('Button', module);
story.addDecorator(Lib.withKnobs);

...
```

2. Use the knob. Eg: `const size = Lib.select('button size', {large: 'btn-large', small: 'btn-small'}, 'large');` or `const content = Lib.text('button title', 'Click me');`
Another example:
```
// General options for knobs
const sizeOptions = {
  'c-btn--tiny': 'tiny',
  'c-btn--small': 'small',
  'c-btn': 'default',
  'c-btn--large': 'large',
};

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
```
