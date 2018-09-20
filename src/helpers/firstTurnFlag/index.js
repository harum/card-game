const checkFirstTurn = (array) => {
  if (array.filter(e => (e.type === 'spade' && e.number === '7')).length > 0) {
    return true;
  }
  return false;
};

export default checkFirstTurn;
