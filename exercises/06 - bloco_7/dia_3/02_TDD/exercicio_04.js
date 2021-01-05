const assert = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(listWords, word) {
    let result = -1;
    for (let index = 0; index < listWords.length; index += 1) {
       
        if (listWords[index] === word){
            result = index;
        }
 }
        return result;      
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
assert.strictEqual(typeof(findTheNeedle), 'function');
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);