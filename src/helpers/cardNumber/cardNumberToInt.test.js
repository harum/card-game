import cardNumberToInt from './cardNumberToInt';

describe('Card number to integer', () => {
  it('Card number 5 to int 5', () => {
    expect(cardNumberToInt('5')).toEqual(5);
  });
  it('Card number A to int 1', () => {
    expect(cardNumberToInt('A')).toEqual(1);
  });
  it('Card number K to int 13', () => {
    expect(cardNumberToInt('A')).toEqual(1);
  });
});
