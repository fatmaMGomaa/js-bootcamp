class Hangman{
    constructor(word, guessesNum){
        this.word = word.toLowerCase().split('')
        this.guesses = guessesNum
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter)) {
                puzzle += letter
            } else {
                letter === ' ' ? puzzle += ' ' : puzzle += "*"
            }
        });
        return puzzle;
    }
    makingGuesse(guess) {
        guess = guess.toLowerCase()
        const isUnque = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }
        if (isUnque) {
            this.guessedLetters.push(guess)
        }
        if (isUnque && badGuess) {
            this.guesses--
        }
        this.gameStatus()
    }
    guessMessage() {
        if (this.status === 'playing') {
            return `left tries: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `sorry you failed, the word was ${this.word.join('')}`
        } else {
            return `congratulation you guessed the word`
        }
    }
    gameStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
}
