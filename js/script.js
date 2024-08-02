//Check link
console.log('JS OK')

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
let list = 'ul';
console.log('list start', list);
    
// 3.lavorazione dati
for (let i=1; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log(`Buzz`)
    }else{
        console.log(`${i}`)
    }
    
}

// 4.generazione output
