const { deepStrictEqual, strictEqual } = require('assert');
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// 3 = fiz 3
// 15 = fizzbuzz 3e5
// 5 = buzz 5

const resultFunction = myFizzBuzz('string');

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro 1');
assert.strictEqual(myFizzBuzz(3), 'fizz' , 'Erro 2');
assert.strictEqual(myFizzBuzz(5), 'buzz', 'Erro 3');
assert.strictEqual(myFizzBuzz(26), 26, 'Erro 4');

assert.strictEqual(myFizzBuzz(resultFunction), false , 'Erro 5');