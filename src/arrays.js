const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index - array.length];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};

const addToArray2 = (element, array) => [...array, element];

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings => strings.map(element => element.toUpperCase());

const reverseWordsInArray = strings => strings.map(element => element.split('').reverse().join(''));

const onlyEven = numbers => numbers.reduce((total, evenNumbers) => {
  if (evenNumbers % 2 === 0) {
    total.push(evenNumbers);
  }
  return total;
}, []);

const removeNthElement2 = (index, array) => array.slice(0, index).concat(array.slice(index + 1));

const elementsStartingWithAVowel = strings => strings.filter(element => /^[aeiou]/i.test(element));

const removeSpaces = string => string.replace(/\s/g, '');

const sumNumbers = numbers => numbers.reduce((total, amount) => total + amount);

const sortByLastLetter = strings => strings.sort((a, b) => a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0));

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
