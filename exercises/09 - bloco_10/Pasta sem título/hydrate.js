function hydrate(string) {

    let numbers = string.replace(/\D+/g, "");
    let copos = 0;
    for (let x in numbers) {
      copos += parseInt(numbers[x]);
    }
    if (copos === 1) {
      return `${copos} copo de água`;
    } else {
      return `${copos} copos de água`;
    }
  }

module.exports = hydrate;