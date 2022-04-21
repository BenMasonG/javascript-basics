const negate = (a) => (!a);

const both = (a, b) => (a && b);

const either = (a, b) => (a || b);

const none = (a, b) => (!a && !b);

const one = (a, b) => {
  if ((a && b) || (!a && !b)) {return false;}
  else if (a || b) { return true;}
};

const  truthiness = (a) => {
  if (a) {
    return true;}
  else {
    return false;}
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = (a) => {
  if (a % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = (a) => a >= 0 && Math.sqrt(a) % 1 === 0;

const startsWith = (char, string) => string.startsWith(char);

const containsVowels = (string) => /[aeiou]/i.test(string) ? true : false;

const isLowerCase = (string) => /[a-z]/.test(string) && !/[A-Z]/.test(string) ? true : false;

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
