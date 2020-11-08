


function preferencias() {
    let botao = document.querySelector('#botao');

    botao.addEventListener('click', function () {
        let valorCor = document.querySelector('#cor-fundo').value;
        localStorage.setItem('corFundo', valorCor);
        let corTexto = document.querySelector('#cor-texto').value;
        localStorage.setItem('corTexto', corTexto);
        let tamanFont = document.querySelector('#tamanho-fonte').value;
        localStorage.setItem('tamanhoFont', tamanFont);
        let espacamento = document.querySelector('#espacamento').value;
        localStorage.setItem('espacamento', espacamento);
        let tipoFonte = document.querySelector('#tipo-fonte').value;
        localStorage.setItem('tipoFonte', tipoFonte);
        window. location. reload();
    });
}

preferencias();

function recuperaItens() {
    let recuperado = document.querySelector('#secao-leitura');
    let corfundo = localStorage.getItem('corFundo');
    let corTexto = localStorage.getItem('corTexto');
    let tamanhoFont = localStorage.getItem('tamanhoFont');
    let espacamento = localStorage.getItem('espacamento');
    let tipoFonte = localStorage.getItem('tipoFonte');

    recuperado.style.backgroundColor = corfundo;
    recuperado.style.color = corTexto;
    recuperado.style.fontSize = tamanhoFont;
    recuperado.style.lineHeight = espacamento;
    recuperado.style.fontFamily = tipoFonte;



}

recuperaItens();








