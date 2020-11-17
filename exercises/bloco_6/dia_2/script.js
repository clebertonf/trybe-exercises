
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

function datePicker(){
    let date = document.getElementById('data');
date.DatePickerX.init();
}

datePicker();

function validateForm(){
    validation.init("form");
}

validateForm();

function MontarCv (){
    let button = document.querySelector("#montar-cr");
    button.addEventListener('click', function () {
        let inputs = document.querySelectorAll('.pessoa');
        let curriculo = document.querySelector('#curriculo');

        for(let index = 0; index < inputs.length; index +=1){
        let p = document.createElement('p');
        p.innerText = inputs[index].value;
        p.className = 'dados';
        curriculo.appendChild(p);
        }

    });
}

MontarCv();

function clear (){
    let button = document.querySelector('#limpar');
    button.addEventListener('click', function(){
        let inputs = document.querySelectorAll('.pessoa');
        let curriculo = document.querySelector('#curriculo');
        curriculo.remove();
        location.reload();
    });
}

clear();
