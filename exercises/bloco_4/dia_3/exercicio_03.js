let num = 5;
let asterisco = "*";
 
for (let index = 1; index <= num; index+= 1){
    let output = "";
    for (let index2 =1; index2 <= num; index2+= 1){
        if(index2 <= num - index){
            output += ' ';
        }else{
            output += asterisco;
        }
    }
    console.log(output);
}