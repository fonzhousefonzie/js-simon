const randomNumbers = [];
const userNumbers = [];
const guessed = [];

for (let i=0; i<5; i++){
    randomNumbers.push(Math.floor(Math.random()*100));
}

document.getElementById('randomNumbers').innerHTML = randomNumbers.join(" | ")

setTimeout(function(){

    document.getElementById('randomNumbers').innerHTML = " ";

    setTimeout(function(){ for (let i=0; i<5; i++){
        const ask = parseInt(prompt('Inserisci un numero di quelli che hai visto'));
        if(isNaN(ask)){
            alert("devi inseriro UN NUMERO!");
            i--;
        } else {
        userNumbers.push(ask);
        }
    }

    
    for (let i=0; i<randomNumbers.length; i++){
        if(randomNumbers.includes(userNumbers[i])){
            guessed.push(userNumbers[i]);
        }
    }

    console.log(randomNumbers);
    console.log(userNumbers);
    console.log(guessed);

    if(guessed.length === randomNumbers.length){
        alert("Bravo, li hai indovinati tutti!");
    } else {
        alert(`Mi dispiace, ne hai indovinati solo ${guessed.length}: ${guessed.join(" | ")}. I tuoi numeri: ${userNumbers.join(" | ")}. I numeri da indovinare: ${randomNumbers.join(" | ")}.`);
    }
}, 1000);

}, 29000);