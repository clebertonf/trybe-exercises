
//Exercicio 03 qual dos tres numeros e maior utilizando funçoes 

maior_numero(100,40,30);

function maior_numero(number1,number2,number3){
    if (number1 > number2 && number1 > number3){
        console.log(number1, "e maior");
    }else if (number2 > number1 && number2 > number3){
        console.log(number2, "e maior");
    }else{
        console.log(number3, "e maior");
    }
}