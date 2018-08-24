const shuffleDeck = (array) => {
  let valueTemp = null;
  const arrayTemp = array;

  for (let i = 0; i < 52; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));
    valueTemp = arrayTemp[i];
    arrayTemp[i] = arrayTemp[j];
    arrayTemp[j] = valueTemp;
  }
  return arrayTemp;
};

export default shuffleDeck;
