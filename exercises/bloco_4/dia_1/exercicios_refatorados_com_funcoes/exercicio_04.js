
//Exercicio 04 numero positivo ou negativo ou zero

numero(0);

function numero(number){
    if (number > 0){
        console.log("Positive")
    }else if (number < 0){
        console.log("Negative")
    }else if (number === 0){
        console.log("Zero")
    }else{
        console.log("Nehum valor definido");
    }
}