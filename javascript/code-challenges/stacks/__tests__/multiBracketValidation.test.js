const validateBrackets = require('../multiBracketValidation');

describe('validateBrackets function', () => {
  it('returns true for balanced brackets', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  it('returns false for unbalanced brackets', () => {
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(](')).toBe(false);
    expect(validateBrackets('{(})')).toBe(false);
  });

  it('handles edge cases', () => {
    expect(validateBrackets('{')).toBe(false); // unmatched opening { remaining
    expect(validateBrackets(')')).toBe(false); // error closing ) arrived without corresponding opening
    expect(validateBrackets('[}')).toBe(false); // error closing }. Doesn’t match opening (
  });
});
