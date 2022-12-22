// Random Numbers

let randomNumber = Math.floor( Math.random() * 6) + 1

console.log(randomNumber);


function rollDice() {
  let random = Math.floor( Math.random() * 6 ) + 1
  return random
}

console.log ( rollDice() )