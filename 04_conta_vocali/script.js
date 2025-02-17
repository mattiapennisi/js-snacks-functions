/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsCount(str) {
    let count = 0
    let vowelsArray = []

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
            count += 1
            vowelsArray[vowelsArray.length] = str.charAt(i)
        }
    }

    let result = `${count} (${vowelsArray})`

    return result
}

// Invoca la funzione qui e stampa il risultato in console

let result = vowelsCount(word)

console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)