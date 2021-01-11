/*
Exercicio bonus
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

*/

let n =5;
let middle = (n +1) /2;

let controlLeft = middle;
let controlright = middle;
let symbol = "*";


for (let line =1; line <= middle; line+= 1){
    let output = "";
    for (let col =1; col <= n; col +=1){
        if (col == controlLeft || col == controlright || line == middle){
            output += symbol;
        }else {
            output +=  " ";
        }
    }
    controlLeft -= 1;
    controlright += 1;
    console.log(output);
}