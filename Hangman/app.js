const guesseOne = new Hangman('cat', 2)
const guesseTwo = new Hangman('new jersey', 3)
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')

puzzleEl.textContent = guesseOne.getPuzzle()
guessEl.textContent = guesseOne.guessMessage()
console.log(guesseOne.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    guesseOne.makingGuesse(guess)
    puzzleEl.textContent = guesseOne.getPuzzle()
    guessEl.textContent = guesseOne.guessMessage()
    console.log(guesseOne.status)
})
