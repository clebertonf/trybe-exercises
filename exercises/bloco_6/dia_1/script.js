let estados = [
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

function comobobox(states) {
    let inputEstado = document.querySelector('#input-estado');

    for (let index = 0; index < states.length; index += 1) {
        let option = document.createElement('option');
        option.innerText = states[index];
        option.value = states[index];
        inputEstado.appendChild(option);
    }
}

comobobox(estados)

let montarCv = document.querySelector('#submit');

function validDate() {

    let data = document.querySelector('#data-inicio').value;
    let dataArray = data.split('/');
    let dia = parseInt(dataArray[0]);
    let mes = parseInt(dataArray[1]);
    let ano = parseInt(dataArray[2]);

    if (!(dia > 0 && dia <= 31 && mes > 0 && mes < 12 && ano > 0)) {
        return 'Erro na formataçao da data';
    }
    return '';
}
function validadDados() {
    montarCv.addEventListener('click', function (event) {
        event.preventDefault();
        validDate();
        let erro;
        let erros = '';
        erro = validDate();
        let inputText = document.querySelectorAll('input[type=text]');
        if (erro != '') {
            erros += `${erro}\n`;
        }

        for (let index = 0; index < inputText.length; index += 1) {
            let input = inputText[index];
            if (input.required) {
                if (input.value === '') {
                    erros += `O campo ${input.name} é obrigatorio\n`;
                }
                if (input.minlength && input.value.length < input.minlength) {
                    erros += `O campo ${input.name} deve possuir no minimo ${input.minlength} caracteres\n`;
                }
            }
        }
        alert(erros)
    });
}
validadDados();

function createCurr(){
    let montarCv = document.querySelector('#submit');
    montarCv.addEventListener('click', function(){
        let inputText = document.querySelectorAll('input[type=text]');

        for (let index =0; index < inputText.length; index +=1){
            let section = document.querySelector('#curriculo')
            let p =  document.createElement('p');

            section.appendChild(p).innerText = inputText[index].value;
        }

    });

}
createCurr()

function clear (){
    
}