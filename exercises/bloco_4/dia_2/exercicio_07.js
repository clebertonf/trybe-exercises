/*
Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = 1000;

for (let valores =0; valores < numbers.length; valores++){
    if(numbers[valores] < valor){
        valor = numbers[valores];
    }
}

console.log(valor);