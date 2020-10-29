/*
let number1 = 10, number2 = 10, number3 = 21;

if ((number1 % 2 == 1) || (number2 % 2 == 1) || (number3 % 2 == 1)){
    console.log(true);
}else{
    console.log(false);
}
*/

//Codigo refatorado

impar(11,20,40);

function impar(number1,number2,number3){
    let retorno;
    retorno = (number1 % 2 ==1 || number2 %2 ==1 || number3 %2 ==1) ? "true" : "false";
    console.log(retorno)
}
