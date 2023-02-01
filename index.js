// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "Surprise";
function writeCards(names, event) {
    let completedCards = []
    for (let i = 0; i < names.length; i++) {
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(completedCards);
    }
    return completedCards;
}

writeCards(names, "surprise");


function countDown(startingNumber) {
    while (startingNumber >0 ){
     console.log(startingNumber);
     startingNumber -=1;
    }
    console.log (startingNumber)
}
