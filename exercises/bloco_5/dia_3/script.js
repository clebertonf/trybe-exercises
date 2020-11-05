function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//01
function insertDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let days = document.querySelector('#days');

    for (let x in dezDaysList) {
        let pushDays = dezDaysList[x];
        let dayList = document.createElement('li');
        dayList.className= 'day ';
        dayList.innerHTML = pushDays;
        days.appendChild(dayList);

        if (dayList.innerText == 24 || dayList.innerText == 31) {
            dayList.className = 'day holiday';
        } else if (dayList.innerText == 25) {
            dayList.className = 'day holiday friday'
        } else if (dayList.innerText == 4 || dayList.innerText == 11 || dayList.innerText == 18) {
            dayList.className = 'day friday';
        } 
    }
}

insertDays()

//02

function button (feriados){
    let recover = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = feriados
    recover.appendChild(newButton);
}

button('feriados');

//03

