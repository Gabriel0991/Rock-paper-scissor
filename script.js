//  Player choice case insensitive

const getPlayerChoice = myChoice => {
  const choice = myChoice.toLowerCase()
  if (choice === `rock` || choice === `paper` || choice === `scissor`) {
    return choice
  } else {
    console.log(`Choose rock,paper or scissor`)
  }
}

// Player choice here
// //////////////////////////////////////////
const playerChoice = getPlayerChoice(`paper`)
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
    return winResult
  } else {
    console.log(`Computer wins (${cpu} beats ${p1})`)
    const winCpu = `lose`
    return winCpu
  }
}

const roundWinner = playRound(playerChoice, cpuChoice)
console.log(roundWinner)

// Play 5 rounds , keep score and decide the winner)
