const cardColor = {
  diamond: 'red',
  club: 'black',
  heart: 'red',
  spade: 'black'
};

const getColor = type =>
  cardColor[type];

export default {
  getColor
};
