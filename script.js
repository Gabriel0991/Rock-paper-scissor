// Computer returns a random result

const getComputerChoice = () => {
  let rps = [`rock`, `paper`, `scissor`]
  return (randomNumber = Math.floor(Math.random() * rps.length))
  // let result = rps[randomNumber]
  // return result
}
console.log(getComputerChoice())

//  Player choice case insensitive and convert string to number for ease to compare

const getPlayerChoice = myChoice => {
  const choice = myChoice.toLowerCase()
  if (choice === `rock`) {
    return 0
  } else if (choice === `paper`) {
    return 1
  } else if (choice === `scissor`) {
    return 2
  } else {
    console.log(`Choose rock,paper or scissor`)
  }
}
console.log(getPlayerChoice(`Rock`))

// Play a single round and declare winner
