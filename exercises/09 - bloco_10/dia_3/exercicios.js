
/*
01 - Crie uma função que gere um número aleatório entre 0 e 100. 
Você irá criar também os testes para essa função. Utilizando o mock,
 defina o retorno padrão como 10. Teste se a função foi chamada, qual 
 seu retorno e quantas vezes foi chamada.
 */

const randomNumber = () =>  Math.floor(Math.random() * 100);
 
/*
02 - Com a mesma função do exercício anterior, utilizando o mock, crie 
uma nova implementação, que deve receber dois parâmetros e retornar a divisão 
do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça
 os testes necessários.
*/




module.exports = {randomNumber};