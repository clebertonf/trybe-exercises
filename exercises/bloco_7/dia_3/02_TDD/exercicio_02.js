const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths (word){
    let contWords = [];
    for (let index = 0; index < word.length; index +=1){
        contWords.push(word[index].length);
    }
    return contWords;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);