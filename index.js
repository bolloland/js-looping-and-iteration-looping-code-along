// Code your solutions in this file
let reply = []
const writeCards = (array, name) => {
    for (let i=0; i < array.length; i++) {
        reply.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return reply
}
writeCards()

function countDown(i) {
    while (i >= 0) {
        console.log(i); 
        i--
    }
}

