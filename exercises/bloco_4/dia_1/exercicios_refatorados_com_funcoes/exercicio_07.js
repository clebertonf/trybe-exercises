
conceito_nota(95);

function conceito_nota(nota){
    if (nota < 0 || nota > 100){
        console.log("ERRO, nota invalida esta fora do intervalo, e menor que zero ou maior que 100!");
    }else{
        if (nota >= 90){
            console.log("Conceito A !");
        }else if (nota >= 80)
            console.log("Conceito B !");
        else if(nota >= 70){
            console.log("Conceito C !");
        }else if(nota >= 60){
            console.log("Conceito D !");
        }else if (nota >= 50){
            console.log("Conceito E !");
        }else if (nota < 50){
            console.log("Conceito F !");
        }
    
    }
}