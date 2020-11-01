/*
 Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false

 */

palindromo('arara')

function palindromo(word) {
    let invertida = word.split('').reverse().join('');
    console.log(invertida);
    if (word === invertida) {
        console.log(true);
    } else {
        console.log(false);
    }
}

    // let word = 0;

    // for (let x =10; x > word ; x--){
    //     console.log(x)
    // }

