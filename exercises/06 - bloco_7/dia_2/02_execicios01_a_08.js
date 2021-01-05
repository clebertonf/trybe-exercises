const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 01 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros,
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function turno (obj, key, value) {
    obj[key] = value;
    console.log(obj)
}

turno(lesson2, 'turno', 'noite')

//02 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function list (obj) {
   console.log(Object.keys(obj))
}

list(lesson3)

// 03 - Crie uma função para mostrar o tamanho de um objeto.

function size (obj) {
    console.log(Object.keys(obj).length);
}

size(lesson3);

// 04 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function values (obj){
    console.log(Object.values(obj));
}

values(lesson1);

// 05 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign .
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.


    const allLessons  = Object.assign({}, {lesson1, lesson2, lesson3});
    console.log(allLessons)  


// 06 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function total (obj) {
    console.log(obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes);
}

total(allLessons);

// 07 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

// 08 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
      if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));