// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


let age = 67

function discount() {
  if (age < 6) {
    return console.log("Free");
  } else if (age < 18) {
    return console.log("Child discount");
  } else if (age < 27) {
    return console.log("Student discount");
  } else if (age < 67) {
    return console.log("Full price");
  } else {
    return console.log("Senior citizen discount");
  }
}

discount()