const isContain7Spade = (cards) => {
  if (cards.filter(e => (e.type === 'spade' && e.number === '7')).length > 0) {
    return true;
  }
  return false;
};

const checkFirstTurn = (player1, player2, player3, player4) => {
  if (isContain7Spade(player1.cards)) {
    return player1;
  } else if (isContain7Spade(player2.card)) {
    return player2;
  } else if (isContain7Spade(player3.cards)) {
    return player3;
  }
  return player4;
};


export {
  checkFirstTurn,
  isContain7Spade
};
