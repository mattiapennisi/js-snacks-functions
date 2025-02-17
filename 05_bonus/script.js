/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

function timeGreetings (str) {
    let newDate = new Date()
    let hours = newDate.getHours()
    let result = ''
    
    if (hours >= 4 && hours < 13) {
        result = 'Buongiorno ' + str
    }

    else if (hours >= 13 && hours < 17) {
        result = 'Buon pomeriggio ' + str
    }

    else {
        result = 'Buonasera ' + str
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console

let result = timeGreetings(name)

console.log(result)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// Bonus: arrow function

const timeGreetingsArrow = str => {
    let newDate = new Date()
    let hours = newDate.getHours()
    let result = ''
    
    if (hours >= 4 && hours < 13) {
        result = 'Buongiorno ' + str
    }

    else if (hours >= 13 && hours < 17) {
        result = 'Buon pomeriggio ' + str
    }

    else {
        result = 'Buonasera ' + str
    }

    return result
}

console.log(timeGreetingsArrow(name))