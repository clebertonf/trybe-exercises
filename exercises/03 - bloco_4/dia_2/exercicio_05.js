/*
Utilizando for, descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=0;

for (let valores=0; valores< numbers.length; valores+=1){
     if (numbers[valores] > maior){
         maior = numbers[valores];
     }
}
console.log(maior);