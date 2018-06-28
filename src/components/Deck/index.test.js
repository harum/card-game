import React from 'react';
import { mount } from 'enzyme';
import Deck from './index';

describe('Stacked Deck', () => {
  const deck = mount(<Deck
    spread={false}
    showCard={false}
  />);

  it('renders 13 card deck class', () => {
    expect(deck.find('.c-deck')).toHaveLength(13);
  });

  it('renders 13 back card class', () => {
    expect(deck.find('.c-deck').find('.c-card-back')).toHaveLength(13);
  });

  it('has no spread modifier class', () => {
    expect(deck.find('.c-deck-container').hasClass('c-deck-container--spread')).toBe(false);
  });

  it('card container is diplayed as block', () => {
    expect(deck.find('.c-deck-container').get(0).props.style).toHaveProperty('display', 'block');
  });
});

describe('Spread Deck', () => {
  const deck = mount(<Deck
    spread
    showCard
  />);

  it('renders 13 card deck class', () => {
    expect(deck.find('.c-deck')).toHaveLength(13);
  });

  it('has spread modifier class', () => {
    expect(deck.find('.c-deck-container').hasClass('c-deck-container--spread')).toBe(true);
  });

  it('card container is not diplayed', () => {
    expect(deck.find('.c-deck-container').get(0).props.style).toHaveProperty('display', 'none');
  });
});
