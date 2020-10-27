/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada 
um dos elementos por 2.
*/
let numbers = [];
let divisao = 0;

for (let valor =0; valor<=25; valor++){
    numbers.push(valor);
}

for (let valores =0; valores< numbers.length; valores++){
      divisao = numbers[valores] / 2;
      console.log(divisao);
    //console.log(numbers[valores] / 2);
}


