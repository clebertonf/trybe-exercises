let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//mostrando Array na formataçao padrão
console.log(numbers);

console.log("================")
//mostrando no modo tradicional
for (let y = 0; y < numbers.length; y++){ //Neste caso insere-se length para contar posiçoes do array
    console.log(numbers[y]);
}
console.log("================")
//mostrando na forma atual das versoes mais novas do javaScript
for (x in numbers){
    console.log(numbers[x]);
}