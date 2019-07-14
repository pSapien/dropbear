const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');


const tokenize = input => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({ type: 'Parenthesis', value: character });

      cursor++;
      continue;
    }

    // whitespace is not a token.
    if (isWhitespace(character)) {
      // ignore and move on with the cursor.
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      // check to see if the next character is a number.
      // use case for multi-digit number.
      while (isNumber(input[++cursor])) {
        // gather that character into the number.
        number += input[cursor];
      }

      tokens.push({ type: 'Number', value: Number(number) });
      continue;
    }

    if (isLetter(character)) {
      let letter = character;

      // check to see if the next character is a letter.
      // use case for a word.
      while (isLetter(input[++cursor])) { 
        // gather that character into the letter. 
        letter += input[cursor];
      }

      tokens.push({ type: 'Name', value: letter });
      continue;
    }

    if (isQuote(character)) {
      let string = '';

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({ type: 'String', value: string });
      cursor++;
      continue;
    }

    throw new Error(`${character} is not valid`);
  }

  return tokens;
};

module.exports = { tokenize };
