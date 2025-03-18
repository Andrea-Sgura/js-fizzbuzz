// 1 - Inserisco 2 variabili che contengono i numeri 1 e 100 e le inizializzo;
let firstNumber = 1;
let lastNumber = 100;

// 2 - Inserisco le 2 variabili fizz e buzz contenenti i numeri 3 e 5 e le inizializzo;
let fizz = 3;
let buzz = 5;

// 3 - Creo il ciclo "for" dove inserisco le variabili per risolvere il problema;
for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % fizz == 0 && i % buzz == 0) {
        console.log ("FizzBuzz");
    }

    else if (i % fizz == 0) {
        console.log("Fizz");
    }

    else if (i % buzz == 0) {
        console.log("Buzz");
    }

    else {
        console.log (i);
    }
}
