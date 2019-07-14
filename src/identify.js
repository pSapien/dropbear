const LETTER_REGEX = /[a-zA-Z]/;
const WHITESPACE_REGEX = /\s+/;
const NUMBER_REGEX = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

const isLetter = character => LETTER_REGEX.test(character);

const isWhitespace = character => WHITESPACE_REGEX.test(character);

const isNumber = character => NUMBER_REGEX.test(character);

const isOpeningParenthesis = character => character === '(';

const isClosingParenthesis = character => character === ')';

const isParenthesis = character =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

const isQuote = character => character === '"';

const isOperator = character => OPERATORS.includes(character);

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
};
