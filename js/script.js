//Check link
console.log('JS OK');

/*scaletta
1.recupero dati
2.creo costante e inizio la lavorazione dei dati
3.apro e modello il ciclo for
4.chiudo stringa
5.stampo in console


*/

// 1.recupero l'elemento dal Dom
const target = document.getElementById('target');
console.log('target on index', target);

//2.raccolta dati
let list = '<ul>';
console.log('list start', list);
    
// 3.lavorazione dati
// inizio ciclo for
for (let i=1; i<= 100; i++){
    // se multipli di 3 e 5
    if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
    list += `<li class="fizzbuzz">FizzBuzz</li>`
    // se multipli di 3
    }else if(i % 3 === 0){
        console.log('Fizz')
        list += `<li class="fizz">Fizz</li>`
    // se multipli di 5
    }else if(i % 5 === 0){
        console.log(`Buzz`)
        list += `<li class="Buzz">Buzz</li>`
    // valore non multiplicabile
    }else{
        console.log(`${i}`)
        list += `<li class="i-js">${i}</li>`
    }
    
}
// chiusura stringa


// 4.generazione output

