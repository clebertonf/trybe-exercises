let estadosBr = [
    '',
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
];

function dropDown(estados) {
    let estadoRecup = document.querySelector('#estado');

    for (let index = 0; index < estados.length; index += 1) {
        let option = document.createElement('option');
        estadoRecup.appendChild(option).innerText = estados[index];
    }
}
dropDown(estadosBr);



function montaCurriculo() {
    let botaoMontarCr = document.querySelector('#montar-cr');

    botaoMontarCr.addEventListener('click', function () {
        let dados = document.querySelectorAll('.pessoa');
        for (let x = 0; x < dados.length; x += 1) {

            let div = document.querySelector('#curriculo')
            let p = document.createElement('p');
            p.innerText = dados[x].value;
            div.appendChild(p);
            dados[x].value = '';
        }
    });
}

montaCurriculo();



function clear() {
    let button = document.querySelector('#limpar');
    button.addEventListener('click', function () {

       let div = document.querySelector('#curriculo');
       div.remove();
    });
}

clear();

