const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

// eslint-disable-next-line prettier/prettier
const round = (a) => {
  return Math.round(a);
};

const roundUp = (a) => Math.ceil(a);

const roundDown = (a) => Math.floor(a);

const absolute = (a) => Math.abs(a);

const quotient = (a, b) => (a - (a % b)) / b;

const remainder = (a, b) => (a % b);

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
