const { strictEqual } = require('assert');
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4],'Erro 1');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Erro 2');

const result = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.deepStrictEqual(result, [1, 2, 4], 'Erro 3');

assert.deepStrictEqual(myRemoveWithoutCopy(result.length, 3), 3, 'Erro 4')