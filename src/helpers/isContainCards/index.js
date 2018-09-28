const isContainsCard = (cards, type, number) => {
  if (cards.filter(e => (e.type === type && e.number === number)).length > 0) {
    return true;
  }
  return false;
};

export default isContainsCard;
