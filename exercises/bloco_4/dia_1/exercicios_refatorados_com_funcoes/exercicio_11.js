
salario_liquido(3500);

function salario_liquido(salario_bru){

    let inss;
    let ir;
    let salarioBruto = salario_bru;
    // INSS
    if (salarioBruto <= 1556.94){
        inss = salarioBruto * 0.08;
    }else if (salarioBruto <= 2594.92){
        inss = salarioBruto * 0.09;
    }else if (salarioBruto <= 5189.82){
        inss = salarioBruto * 0.11;
    }else if (salarioBruto >= 5189.82){
        inss = 570,88;
    }

    salarioBase = salarioBruto - inss;

    //IR
    if (salarioBase <= 1903.98){
        ir = 0;
    }else if (salarioBase <= 2826.65){
        ir = salarioBase * 0.075 - 142.8;
    }else if (salarioBase <= 3751.05){
        ir = salarioBase * 0.15 - 354.80;
    }else if (salarioBase <= 4664.68){
        ir = salarioBase * 0.225 - 636.13;
    }else if (salarioBase >= 4664.68){
        ir = salarioBase * 0.275 - 869,36
    }


    let salarioLiquido =  salarioBase - ir;
    console.log(salarioLiquido);

}