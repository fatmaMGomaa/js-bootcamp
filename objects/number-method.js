let max=10
let min=0
const geusNumber=Math.floor(Math.random()*(max-min+1))+min

const guesMaking=function (guess) {
    return guess===geusNumber
}

console.log(guesMaking(5))

