const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = (numbers) => {
    let ordenados = numbers.sort((a, b) => a - b);
    console.log(`Os números ${ordenados} se encontram ordenados de forma crescente!`);
}

sort(oddsAndEvens);

