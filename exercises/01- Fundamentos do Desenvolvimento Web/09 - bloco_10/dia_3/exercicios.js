
/*
01 - Crie uma função que gere um número aleatório entre 0 e 100. 
Você irá criar também os testes para essa função. Utilizando o mock,
 defina o retorno padrão como 10. Teste se a função foi chamada, qual 
 seu retorno e quantas vezes foi chamada.
 */

 /*
02 - Com a mesma função do exercício anterior, utilizando o mock, crie 
uma nova implementação, que deve receber dois parâmetros e retornar a divisão 
do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça
 os testes necessários.
*/

/*
03 -  Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova
 implementação que receba três parâmetros e retorne sua multiplicação. Após fazer
  os devidos testes para ela, resete sua implementação e crie uma nova, que receba
   um parâmetro e retorne seu dobro. Faça os testes necessários.
*/

const randomNumber = () =>  Math.floor(Math.random() * 100);
 
/*
04 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string 
e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira 
letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo.
 Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string
  em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra 
  de uma string. A terceira deve receber três strings e concatená-las.
*/

const capsLock = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const twoWords = (str1, str2) => `${str1} ${str2}`;

function fetchURL() {
   return fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
       response.json().then((data) => {
        data.ok ? Promise.resolve(data) : Promise.reject(data);
       })
   })
  }


module.exports = {randomNumber, capsLock, firstLetter, twoWords, fetchURL};

