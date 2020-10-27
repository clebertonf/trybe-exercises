let numbers = [3,2,1];

for (let x = 1; x < numbers.length; x++){
    
    for(let y=0; y < x; y++){
        if (numbers[x] < numbers[y]){
            let position = numbers[x];

            numbers[x] = numbers[y];
            numbers[y] = position;
        }
    }
}

console.log(numbers);