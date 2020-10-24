// Exercicio 05 angulos de um triangulo

let ang1 = 60 , ang2 = 60 , ang3 = 60;

if ((typeof ang1 !='number') || (typeof ang2 != 'number') || (typeof ang3 != 'number')){
    console.log('ERRO, algum angulo e invalido!'); 
}else {
    resul = ang1 + ang2 + ang3;
    if(resul == 180){
        console.log("True")
    }else{
        console.log("False")
    }
}

