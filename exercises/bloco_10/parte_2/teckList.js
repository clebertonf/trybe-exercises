function techList(tech, name) {
    
    let ordenado = tech.sort();
    let array = [];
  
    if (tech.length === 0) {
      return 'Vazio!'
    }
  
    for (let x in ordenado) {
      array.push({ tech: ordenado[x], name: name });
    }
    return array;
  }
  
  module.exports = techList;