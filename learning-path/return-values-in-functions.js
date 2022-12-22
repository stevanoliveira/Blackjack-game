let player1Time = 102
let player2Time = 107

function getFatestRaceTime() {
  if ( player1Time < player2Time ) {
    return player1Time
  } else if ( player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}

let fastestRace = getFatestRaceTime()
console.log();

function totalTime( t1, t2 ){
  let tot = t1 + t2
  return tot
}

let total = totalTime( player1Time, player2Time )
console.log(total);


