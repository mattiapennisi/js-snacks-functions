/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function greetName (str) {
    const string = 'Ciao ' + str
    return string
}

// Invoca la funzione qui e stampa il risultato in console

let result = greetName(userName)

console.log(result)

//Risultato atteso se si passa 'Mario': // ciao Mario

// Bonus: arrow function

const greetNameArrow = str => 'Ciao ' + str

console.log(greetNameArrow(userName))