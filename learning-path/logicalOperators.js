
// AND operator - &&
let hasSolvedChalleng = false
let hasHintsLeft = false

function showSolution() {
  if ( hasSolvedChallend === false && hasHintsLeft === false ) {
    showSolution()
  } 
}

function showSolution() {
  console.log("Showing solution...");
}

// ====---====---====---====---====---====---====---====---====---====---

// OR operator - ||
let likesDocumentaries = false
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new filme we think you will like!");
}

