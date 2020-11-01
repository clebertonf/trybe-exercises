/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

let listNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorArray(names) {
    let contagem = 0;
    let maior = 0;

    for (let x in names) {
        contagem = names[x].length;

        if (contagem > maior) {
            maior = contagem;
        }
    }

    for (let y in names) {
        if (names[y].length === maior)
            console.log(names[y])
    }
}

maiorArray(listNames);