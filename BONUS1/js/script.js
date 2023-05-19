//DICHIARAZIONE VARIABILI

const lista = document.getElementById('lista');
const output = document.createElement('output');

for (let num = 1; num<= 100; num++) {

    if (num % 15 === 0) {
        let num = 'FizzBuzz';
        output.append(num);
        lista.innerHTML += `<li>${num}</li>`;

    }else if (num % 3 === 0) {
        let num = 'Fizz';
        output.append(num);
        lista.innerHTML += `<li>${num}</li>`;

    }else if (num % 5 === 0) {
        let num = 'Buzz'; 
        output.append(num);
        lista.innerHTML += `<li>${num}</li>`;

    } else {
        output.append(num);
        lista.innerHTML += `<li>${num}</li>`;
    }

    
}


