function encode(string) {
    // seu código aqui
    let vowels = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" };
    let result = "";
    result = string.replace(/[aeiou]/gi, v => vowels[v]);
    return result
  }
  
  function decode(reverse) {
    // seu código aqui
    let vowels = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" };
    let result = reverse.replace(/[12345]/gi, y => vowels[y]);
    return result;
  }

  
  describe('Testes das funçoes encode e decode', () => {
    test('Se encode e do tipo funçao', () =>{
      expect(typeof(decode)).toEqual('function');
    });
    
    test('Se decode e do tipo função', () =>{
      expect(typeof(decode)).toEqual('function');
    });

    const string = 'a,e,i,o,u';
    test('Se as vogais são tranformadas em numeros (ENCODE)', () => {
      expect(encode(string)).toEqual('1,2,3,4,5');
    });

   const numbers = '1,2,3,4,5';
   test('Se os numeros são transformados em vogais (DECODE)', () => {
      expect(decode(numbers)).toEqual('a,e,i,o,u');
   });

   test('Se os demais não são convertidos Encode', () => {
    expect(encode('casa')).toEqual('c1s1');
   });

   test('Se os demais não são convertidos Decode', () => {
    expect(decode('t2t4')).toEqual('teto');
   });

   const string2 = 'Cleber';
   test('Se a string passada tem o mesmo numero de caracteres Encode', () => {
    expect(encode(string2).length).toBeGreaterThanOrEqual(string2.length);
   });
    
   const string3 = 'c1s1';
   test('Se a string passada tem o mesmo numero de caracteres Decode', () => {
    expect(decode(string3).length).toBeGreaterThanOrEqual(string3.length);
   });

  });

  