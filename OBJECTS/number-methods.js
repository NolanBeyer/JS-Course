// let num = 103.941
// let otherNum = 103.4

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(otherNum))

// let min = 10
// let max = 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// let makeGuess = function(guess){
// let min = 1
// let max = 5
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// return guess === randomNum
// }

// // console.log(makeGuess(1))
// let minNumber = 15
// let maxNumber = 25

// let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

// console.log(randomNumber)

let randomNumber = function(guess){
    let minNumber = 1
    let maxNumber = 5
    randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1))
    return guess === randomNum
}

console.log(randomNumber(5))