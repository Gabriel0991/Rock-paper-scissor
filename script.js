let playerScore = 0
let computerScore = 0

const getPlayerChoice = () => {
  const wrongChoice = `error`
  const playerChoice = prompt(
    `Choose rock, paper or scissor`
  ).toLocaleLowerCase()
  if (
    playerChoice === `rock` ||
    playerChoice === `paper` ||
    playerChoice === `scissor`
  ) {
    return playerChoice
  } else if (
    playerChoice != `rock` ||
    playerChoice != `paper` ||
    playerChoice != `scissor`
  ) {
    console.log(`Please choose rock, paper , or scissor`)
    return wrongChoice
  }
}

const getComputerChoice = () => {
  const rps = [`rock`, `paper`, `scissor`]
  const numberGenerator = Math.floor(Math.random() * rps.length)
  const result = rps[numberGenerator]
  return result
}

const getRoundWInner = () => {
  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()
  if (playerChoice === `error`) {
    console.log(`Try again`)
  } else if (playerChoice === computerChoice) {
    console.log(`It's a tie`)
    console.log(`Player (${playerChoice}) vs Computer (${computerChoice})`)
  } else if (
    (playerChoice === `rock` && computerChoice === `scissor`) ||
    (playerChoice === `paper` && computerChoice === `rock`) ||
    (playerChoice === `scissor` && computerChoice === `paper`)
  ) {
    console.log(`You Win`)
    console.log(`Player (${playerChoice}) vs Computer (${computerChoice})`)
    playerScore++
  } else {
    console.log(`Computer wins`)
    console.log(`Player (${playerChoice}) vs Computer (${computerChoice})`)
    computerScore++
  }
}

const getGameWInner = () => {
  if (playerScore < 5 && computerScore < 5) {
    getRoundWInner()
    console.log(`Player(${playerScore}) Computer(${computerScore})`)
    getGameWInner()
  } else if (playerScore === 5) {
    console.log(`You win the game`)
    console.log(`Player(${playerScore}) Computer(${computerScore})`)
  } else if (computerScore === 5) {
    console.log(`Computer wins the game`)
    console.log(`Player(${playerScore}) Computer(${computerScore})`)
  }
}
getGameWInner()
