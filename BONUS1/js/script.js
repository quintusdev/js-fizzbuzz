//DICHIARAZIONE VARIABILI

for (let num = 1; num<= 100; num++) {

    if (num % 15 === 0) {
        let num = 'FizzBuzz';
        console.log(num);

    }else if (num % 3 === 0) {
        let num = 'Fizz';
        console.log(num);

    }else if (num % 5 === 0) {
        let num = 'Buzz';
        console.log(num);

    } else {
    console.log(num);
    
    }
}

