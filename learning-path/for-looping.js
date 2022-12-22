// Count to ten

// We need to specify..

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START            FINISH        STEP SIZE
// for ( let i = 1 ; i < 11 ; i += 1 ) {

//   console.log(count);
  
// }


let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately."
]

for ( let i = 0; i < messages.length; i += 1) {

  console.log(messages[i]);

}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// let cards = [ 7, 3, 9 ]

// for ( i = 0; i < cards.length; i ++ ){
//   console.log(cards[i]);
// }


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
