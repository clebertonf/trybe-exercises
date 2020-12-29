const assert = require('assert');

const greetPeople = (people) => {
    let array = [];
    for (const person in people) {
      array.push(`Hello ${people[person]}`);
    }
    return array;
    
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  result2 = ['Hello Irina', 'Hello Ashleigh'];

  assert.deepStrictEqual(typeof(greetPeople), 'function', 'Erro 01');
  assert.deepStrictEqual(greetPeople(parameter), result, 'Erro 02');
  assert.notDeepStrictEqual(greetPeople(parameter),result2, 'Erro 03')
 
