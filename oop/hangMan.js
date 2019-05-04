const Hangman = function (word,guessesNum) {
        this.word=word.toLowerCase().split('')
        this.guesses=guessesNum
        this.guessedLetters=['c','n','j']
}

Hangman.prototype.getPuzzle=function(){
    let puzzle=''
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)){
            puzzle+=letter
        }else{
            letter === ' ' ? puzzle += ' ':puzzle += "*" 
        }
    });
    return puzzle;
}
const guesseOne = new Hangman('cat',2)
console.log(guesseOne)
const guesseTwo = new Hangman('new jersey',3)
console.log(guesseTwo.getPuzzle())