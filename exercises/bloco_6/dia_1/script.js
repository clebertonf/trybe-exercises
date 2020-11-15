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

function validDate() {
    let botaoEnviar = document.querySelector('#submit');

    botaoEnviar.addEventListener('click', function (event) {
        event.preventDefault();
        let data = document.querySelector('#data-inicio').value;
        let dataArray = data.split('/');
        let dia = parseInt(dataArray[0]);
        let mes = parseInt(dataArray[1]);
        let ano = parseInt(dataArray[2]);

        if (!(dia > 0 && dia <= 31 && mes > 0 && mes < 12 && ano > 0)) {
            alert('Erro na formataçao da data')
        }
    });
}
validDate();

