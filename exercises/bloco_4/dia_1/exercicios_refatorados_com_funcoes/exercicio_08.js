/*
let number1 = 11, number2 = 11, number3= 11;

if ((number1 % 2 == 0) || (number2 % 2 == 0) || (number3 % 2 ==0)){ 
    console.log(true);
}else{
    console.log(false);
}
*/

//Codigo refatorado

let number1 = 11, number2 = 10, number3 = 10;
let retorno;

console.log (retorno = (number1 % 2 ==0 || number2 %2 ==0 || number3 %2 ==0) ? true : false);
