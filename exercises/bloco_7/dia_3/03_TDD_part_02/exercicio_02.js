const assert = require('assert');

const removeVowelsNew = (word) => {
    const characters = word.split('');
    const results = [];
    let counter = 0;
  
    for (let i = 0; i < characters.length; i += 1) {
      if (characters[i] === 'a' || characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o' || characters[i] === 'u') {
        counter += 1;
        results.push(counter);
      } else {
        results.push(characters[i]);
      }
    }
    return results.join('');
  };

  const parameter = 'Dayane';
  const result = 'D1y2n3';

  assert.strictEqual(typeof(removeVowelsNew), 'function', 'Erro 01');
  assert.strictEqual(removeVowelsNew(parameter), result, 'Erro 02');
  assert. notDeepStrictEqual(removeVowelsNew(parameter), 'Dayane', 'Erro 03');