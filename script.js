/////////////////////////////////

//  Player and cpu score
let playerScore = 0
let cpuScore = 0
/////////////////////////////////

//  Prompt player choice

function promptFunc() {
  const choice = prompt(`Choose rock, paper or scissor`)
  return choice.toLocaleLowerCase()
}

/////////////////////////////////
//  Random computer choice
function getComputerChoice() {
  let rps = [`rock`, `paper`, `scissor`]
  let randomNumber = Math.floor(Math.random() * rps.length)
  let result = rps[randomNumber]
  return result
}
///////////////////////////////////

// Play one round
function playRound() {
  const p1 = promptFunc()
  const cpu = getComputerChoice()
  if (p1 === cpu) {
    console.log(`It's a tie You choose ${p1} vs Cpu ${cpu}`)
  } else if (
    (p1 === `rock` && cpu === `scissor`) ||
    (p1 === `paper` && cpu === `rock`) ||
    (p1 === `scissor` && cpu === `paper`)
  ) {
    console.log(`You Win You choose ${p1} vs Cpu ${cpu}`)
    playerScore++
  } else {
    console.log(`Computer Wins You choose ${p1} vs Cpu ${cpu}`)
    cpuScore++
  }
}
/////////////////////////////////////

// Play games until 5

function test() {
  if (playerScore < 5 && cpuScore < 5) {
    playRound()
    console.log(playerScore, cpuScore)
    test()
  } else if (playerScore === 5) {
    console.log(`You win the game`)
    console.log(playerScore, cpuScore)
  } else if (cpuScore === 5) {
    console.log(`Computer wins the game`)
    console.log(playerScore, cpuScore)
  }
}
test()
//////////////////////////////////////////
