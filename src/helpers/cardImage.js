import club from '../assets/images/club.svg';
import diamond from '../assets/images/diamond.svg';
import heart from '../assets/images/heart.svg';
import spade from '../assets/images/spade.svg';
import jack from '../assets/images/jack.svg';
import queen from '../assets/images/queen.svg';
import king from '../assets/images/king.svg';

const imagesByNumber = ['J', 'Q', 'K'];

const images = {
  J: jack,
  Q: queen,
  K: king,
  club,
  diamond,
  heart,
  spade
};

const isImageByNumber = number =>
  imagesByNumber.includes(number);

const mainImage = (shape, number) =>
  (isImageByNumber(number) ? images[number] : images[shape]);

const thumbnail = shape =>
  images[shape];

export default {
  mainImage,
  thumbnail
};
