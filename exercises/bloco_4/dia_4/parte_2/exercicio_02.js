/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.

*/

let array = [2, 3, 6, 16, 10, 1];

let maior = 0;
let indice =0;
for (let key in array) {
    if (array[key] > maior) {
        maior = array[key];
        indice = key;
    }
}
console.log('Maior ' + maior);
console.log('Posicao ' + indice);

