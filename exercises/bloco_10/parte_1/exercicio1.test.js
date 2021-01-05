
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return ('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('Testes Função soma', ()=> {
  // A função sum(a, b) retorna a soma do parâmetro a com o b
    test('Se a função retorna soma dos valores', () => {
        expect(sum(5,2)).toEqual(7);
    });
    // Teste se o retorno de sum(4, 5) é 9
    test('Se o retorno da soma de 4 + 5 = 9', () => {
      expect(sum(4,5)).toEqual(9);
    });
    // Teste se o retorno de sum(0, 0) é 0
    test('Se o retorno da soma de 0 + 0 = 0', () => {
      expect(sum(0,0)).toEqual(0);
    });
    // Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
    test('Se passado uma string lança um erro', () => {
      expect(sum(4, '5')).toEqual('parameters must be numbers')
    });
    // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
    test('Se passado string retorna parameters must be numbers', () =>{
      expect(sum(4, '5')).toEqual('parameters must be numbers');
    });
});


