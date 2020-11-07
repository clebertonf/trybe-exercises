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

function button (name){
    let recover = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = name
    recover.appendChild(newButton);
}

button('Feriados');

//03

function ChangeColorHolidays(){

    const button = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');

    button.addEventListener('click', changeColor);

    function changeColor(){
        for (let index =0; index < holidays.length; index++){

            if (holidays[index].style.backgroundColor === 'white'){
                holidays[index].style.backgroundColor = '#47DBE7'
            }else{
                holidays[index].style.backgroundColor = 'white'
            }
        }
    }
    }
ChangeColorHolidays();

//04

function NameButon(string){
    let div = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.innerText = string;
    button.id = 'btn-friday';
    div.appendChild(button);    
}
NameButon('Sexta-Feira');

//05

function ChangeNameDay(){
    let button = document.querySelector('#btn-friday');
    button.addEventListener('click', changeSexta);

    function changeSexta(){
            let sextas = document.querySelectorAll('.friday');
            for (let index = 0; index < sextas.length; index++){
                if (sextas[index].innerText === 'SEXTOU!'){
                    sextas[index].innerText =  parseInt(sextas[index].previousElementSibling.innerText) +1;
                }else{
                    sextas[index].innerText = 'SEXTOU!'
                }
                
            }  
    }

}
ChangeNameDay();

//06

let days = document.querySelector('#days');
function zoom (){
    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = 'bold';
    });
    
}

function outZom (){
    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = 'normal';
    })
}

zoom();
outZom();

//07

let divMyTasks = document.querySelector('.my-tasks');

function myTask(tarefas){
    let newElement = document.createElement('span');
    newElement.innerText = tarefas;
    divMyTasks.appendChild(newElement);
}

myTask('Cozinhar');

//08


 function subtitle (cor){
    let newElement = document.createElement('div');
    newElement.className = 'task';
    newElement.style.backgroundColor = cor;

    divMyTasks.appendChild(newElement);
 }

 subtitle('pink');

 //09

 function addevent (){
    
       
        let task = document.querySelector('.task');

        task.addEventListener('click', function(event){
            let recoveredElement = document.querySelector('.selected');
            if (recoveredElement == null){
                event.target.className = 'task selected'
            }else{
                event.target.className = 'task'
            }
        })
    }
 addevent();

 //10

 function addAssignment(){
     days.addEventListener('click', function(event){
         let recoveredElement = document.querySelector('.selected');
         if (recoveredElement != null){
             if (event.target.style.color === recoveredElement.style.backgroundColor){
                 event.target.style.color = '';
             }else{
                 event.target.style.color = recoveredElement.style.backgroundColor;
             }
         }
     });
     
 }
 addAssignment();

 //Bonus

 function addCompr(){
     let botao = document.querySelector('#btn-add');
     let compromisso = document.querySelector('.task-list');
     let compromissoEscrito = document.querySelector('#task-input');
     let li = document.createElement('li');

     li.className = 'li-task'
     compromisso.appendChild(li);
     let recuperadoLi = document.querySelector('.li-task');
     
     botao.addEventListener('click', function (){
        
        recuperadoLi.innerText=compromissoEscrito.value;
        
     });
 }
 addCompr();