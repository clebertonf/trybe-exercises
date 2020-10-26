/*
Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (let valores = 0; valores < numbers.length; valores++){
    if (numbers[valores] % 2 == 1){
        impares.push(numbers[valores]);
    }
}
if (impares.length == 0){
    console.log("Nehum numero impar encontrado !")
}else{
    console.log(impares.length);
}

//outra forma
 /*
 for (let valor =0; valor < numbers.length; valor +=1) {
    if (numbers[valor] % 2 == 1){
       impares +=1;
       }  
} 
console.log(impares);
 */
