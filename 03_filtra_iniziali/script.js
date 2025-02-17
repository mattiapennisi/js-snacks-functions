/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function initialsCheck (value, arr) {
    let arrayNames = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].charAt(0) == value) {
            arrayNames.push(arr[i])
        }
    }

    return arrayNames
}

// Invoca la funzione qui e stampa il risultato in console

let result = initialsCheck('A', names)

console.log(result)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]