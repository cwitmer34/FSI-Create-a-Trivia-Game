function playGame() {
  
  let userName = window.prompt(`Please enter your name in the prompt below.`)
  let amountCorrect = 0

  for (let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let userAnswer = window.prompt(question.text)

    if (userAnswer === question.correctAnswer) {
      console.log('Correct')
      amountCorrect++
      console.log(amountCorrect)
    }
  }

  window.alert(`You got ${amountCorrect} correct.`)

}

let playAgain = true

while (playAgain === true) {
  playGame()
  let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
  if(userChoice === 'yes'){
          playAgain = true
      } else {
          playAgain = false
          window.alert('Thanks for playing the game!')
      }
}
