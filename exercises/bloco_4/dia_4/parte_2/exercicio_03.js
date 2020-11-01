/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

*/

array = [2, 4, 6, 7, 10, 0, -3];

let menor = 0;
let indice = 0;

for (let key in array){
    if (array[key] < menor){
        menor = array[key];
        indice = key;
    }
}

console.log('Menor ' + menor);
console.log('Indice ' + indice );