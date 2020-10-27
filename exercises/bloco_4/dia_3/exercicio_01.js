/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/

let num = 5;
let asteriscoLinha = "*";
let linha = "";

for (let index =0; index < num; index ++){
    linha = linha + asteriscoLinha;
}

for (let index2 = 0; index2 < num; index2++){
    console.log(linha);
}