
let custoProdutoInicial = 100;
let imposto = custoProdutoInicial * 20 / 100;
let custoFinal = custoProdutoInicial + imposto;
let valorVenda = 210;
let quantidadeVenda = 1000;

if (custoProdutoInicial <= 0 || valorVenda  <= 0 || quantidadeVenda <= 0){
    console.log("ERRO, nehum destes valores podem ser  zero ou inferiores!")
}else{
    lucro = (valorVenda - custoFinal) * quantidadeVenda;
    console.log(lucro);
}
