/*
Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

*/
primos(100);

function primos(limite){
    for(let numero = 2; numero <=limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo (numero){
for (let divisor = 2; divisor < numero; divisor++){
    if (numero % divisor ===0){
        return false;
    }
}
    return true;
}