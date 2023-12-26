playerScore = 0
cpuScore = 0
//  Player choice case insensitive

const getPlayerChoice = myChoice => {
  const choice = myChoice.toLowerCase()
  if (choice === `rock` || choice === `paper` || choice === `scissor`) {
    return choice
  } else {
    // console.log(`Choose rock,paper or scissor`)
  }
}

// Player choice here
// //////////////////////////////////////////
const playerChoice = getPlayerChoice(``)
// console.log(playerChoice)
///////////////////////////////////////////////

// Computer returns a random result

const getComputerChoice = () => {
  let rps = [`rock`, `paper`, `scissor`]
  let randomNumber = Math.floor(Math.random() * rps.length)
  let result = rps[randomNumber]
  return result
}
const cpuChoice = getComputerChoice()
// console.log(cpuChoice)
// Play round
// const playRound = () => {
//   console.log(`You (${getPlayerChoice()}) vs Computer (${cpuChoice})`)
//   if (getPlayerChoice() === cpuChoice) {
//     console.log(`it's a tie `)
//     const tieResult = `tie`
//     return tieResult
//   } else if (
//     (getPlayerChoice() === `rock` && cpuChoice === `scissor`) ||
//     (getPlayerChoice() === `paper` && cpuChoice === `rock`) ||
//     (getPlayerChoice() === `scissor` && cpuChoice === `paper`)
//   ) {
//     console.log(`You win (${getPlayerChoice()} beats ${cpuChoice})`)
//     const winResult = `win`
//     playerScore++
//     return winResult
//   } else {
//     console.log(`Computer wins (${cpu} beats ${getPlayerChoice()})`)
//     const winCpu = `lose`
//     cpuScore++
//     return winCpu
//   }
// }
// Play single round and declare winner

const playRound = (p1, cpu) => {
  console.log(`You (${p1}) vs Computer (${cpu})`)
  if (p1 === cpu) {
    console.log(`it's a tie `)
    const tieResult = `tie`
    return tieResult
  } else if (
    (p1 === `rock` && cpu === `scissor`) ||
    (p1 === `paper` && cpu === `rock`) ||
    (p1 === `scissor` && cpu === `paper`)
  ) {
    console.log(`You win (${p1} beats ${cpu})`)
    const winResult = `win`
    playerScore++
    return winResult
  } else {
    console.log(`Computer wins (${cpu} beats ${p1})`)
    const winCpu = `lose`
    cpuScore++
    return winCpu
  }
}

const roundWinner = playRound(playerChoice, cpuChoice)
// console.log(roundWinner)

// End game
function endGame() {
  if (playerScore === 5) {
    console.log(`You win the game ${playerScore} vs ${cpuScore}`)
  } else if (cpuScore === 5) {
  }
  console.log(`You lose the Game You${playerScore} vs Cpu${cpuScore}`)
}

// Play 5 rounds , keep score and decide the winner)

console.log(roundOne(), playerScore, cpuScore)
// Function Prompt

function promptFunction() {
  const choice = prompt(`Choose rock, paper or scissor`)
  return getPlayerChoice(choice)
}
//  Round 1

function roundOne() {
  if (promptFunction() === `rock`) {
  } else {
    console.log(`Choose`)
  }
}
