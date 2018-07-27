const suits = ['spade', 'heart', 'club', 'diamond'];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const getAllCards = () => {
  const deck = [];

  for (let i = 0; i < values.length; i += 1) {
    for (let j = 0; j < suits.length; j += 1) {
      const card = {
        type: suits[j],
        number: values[i],
        eligible: true,
        picked: false
      };
      deck.push(card);
    }
  }

  return deck;
};

const getSuffledDeck = () => {
  const suffledDeck = getAllCards();

  for (let i = 0; i < 1000; i += 1) {
    const locationOne = Math.floor((Math.random() * suffledDeck.length));
    const locationTwo = Math.floor((Math.random() * suffledDeck.length));

    const temp = suffledDeck[locationOne];
    suffledDeck[locationOne] = suffledDeck[locationTwo];
    suffledDeck[locationTwo] = temp;
  }

  return suffledDeck;
};

module.exports = getSuffledDeck;
