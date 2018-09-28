import hasEligibleCard from './hasEligibleCard';

const hasEligible = [
  {
    type: 'heart',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'club',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'diamond',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'spade',
    number: 'A',
    eligible: true,
    picked: false
  }
];

const hasNoEligible = [
  {
    type: 'heart',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'club',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'diamond',
    number: 'A',
    eligible: false,
    picked: false
  },
  {
    type: 'spade',
    number: 'A',
    eligible: false,
    picked: false
  }
];

describe('hasEligibleCard Function', () => {
  it('returns true for at least one eligible cards', () => {
    expect(hasEligibleCard(hasEligible)).toBe(true);
  });

  it('returns false if no eligible card', () => {
    expect(hasEligibleCard(hasNoEligible)).toBe(false);
  });
});
