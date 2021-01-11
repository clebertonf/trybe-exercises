/*
Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
"valor menor ou igual a 20";

*/

// Algoritmo de calculo de media
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0;
let media= 0;
for (valor in numbers){
    soma += numbers[valor]
}

media = soma / numbers.length;
console.log(media);

//Condicional pára saber se o valor da media e maior ou menor que 20
if (media > 20){
    console.log("Valor maior que 20 !");
}else if (media <= 20){
    console.log("Valor menor ou igual a 20 !");
}