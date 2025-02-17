/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function namesInitials(arr) {
    let arrayInitials = []

    for (let i = 0; i <= arr.length - 1; i++) {
        arrayInitials.push(arr[i].charAt(0))
    }

    return arrayInitials
}

// Invoca la funzione qui e stampa il risultato in console

let result = namesInitials(names)

console.log(result)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]