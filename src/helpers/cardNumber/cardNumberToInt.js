const conversion = {
  A: 1,
  J: 11,
  Q: 12,
  K: 13
};

const cardNumberToInt = (num) => {
  let result = parseInt(num, 10);
  if (Number.isNaN(result)) {
    result = conversion[num];
  }
  return result;
};

export default cardNumberToInt;
