//DICHIARAZIONE VARIABILI
"use strict";
//ASSEGNO ELEMENTO UL DAL DOM
const lista = document.querySelector('ul');
//CICLO FOR
for (let num = 1; num<= 100; num++) {
    //CREO UN NUOVO LI OGNI VOLTA CHE ENTRO NEL CICLO
    const li = document.createElement('li');
    //ASSEGNO AD LI LA VARIABILE NUM
    li.append(num);
    //ASSEGNO A LISTA LA VARIABILE LI
    lista.append(li);
    //EFETTUO IL CONTROLLO
    if (num % 15 === 0) {
        li.innerHTML = 'FizzBuzz';

    }else if (num % 3 === 0) {
        li.innerHTML = 'Fizz';

    }else if (num % 5 === 0) {
        li.innerHTML = 'Buzz';
    }

}

    


