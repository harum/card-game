const aceSpade = {
  type: 'spade',
  number: 'A',
  eligible: false,
  picked: false
};
const fourSpade = {
  type: 'spade',
  number: '4',
  eligible: false,
  picked: false
};
const fiveSpade = {
  type: 'spade',
  number: '5',
  eligible: false,
  picked: false
};
const sevenSpade = {
  type: 'spade',
  number: '7',
  eligible: false,
  picked: false
};
const kingSpade = {
  type: 'spade',
  number: 'K',
  eligible: false,
  picked: false
};


const sevenHeart = {
  type: 'heart',
  number: '7',
  eligible: false,
  picked: false
};
const tenHeart = {
  type: 'heart',
  number: '10',
  eligible: false,
  picked: false
};
const jackHeart = {
  type: 'heart',
  number: 'J',
  eligible: false,
  picked: false
};


const twoClub = {
  type: 'club',
  number: '2',
  eligible: false,
  picked: false
};
const threeClub = {
  type: 'club',
  number: '3',
  eligible: false,
  picked: false
};
const sevenClub = {
  type: 'club',
  number: '7',
  eligible: false,
  picked: false
};
const eightClub = {
  type: 'club',
  number: '8',
  eligible: false,
  picked: false
};


const aceDiamond = {
  type: 'diamond',
  number: 'A',
  eligible: false,
  picked: false
};
const threeDiamond = {
  type: 'diamond',
  number: '3',
  eligible: false,
  picked: false
};


const handCardsDummyFull = [
  aceSpade,
  fourSpade,
  fiveSpade,
  kingSpade,
  tenHeart,
  jackHeart,
  twoClub,
  threeClub,
  sevenClub,
  eightClub,
  aceDiamond,
  threeDiamond
];

const handCardsDummySeven = [
  sevenSpade,
  sevenHeart,
  sevenClub
];

export default handCardsDummyFull;
export {
  handCardsDummySeven,
  aceSpade,
  fourSpade,
  fiveSpade,
  kingSpade,
  tenHeart,
  jackHeart,
  twoClub,
  threeClub,
  sevenClub,
  eightClub,
  aceDiamond,
  threeDiamond
};
