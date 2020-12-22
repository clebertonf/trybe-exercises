// const fatorial = (number) => {
//     let result = 1;
//     for (let index = 1; index <= number; index += 1) {
//         result *= index;
//     }
//     return result
// }

// console.log(fatorial(4));

// Recursivo

function fatorialRec (num){
    if (num === 0 || num === 1){
        return 1;
    }else{
        return num * fatorialRec(num -1);
    }
 }

  console.log(fatorialRec(4))

 