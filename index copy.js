// Code your solutions in this file
let people = ["Ada", "Brendan", "Ali"];
let event = "birthday";
let cards = []

function writeCards(people, event) {
    for (let i = 0; i < people.length; i++ ) {
        cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}                    

// could we solve this with slice()?

function countDown(posNumber) {
    
     while (posNumber > -1) {
        console.log(posNumber);
        posNumber--;
     }
}
