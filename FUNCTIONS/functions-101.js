// Function - input (argument), code, output (return value)

let greetUser = function(){
    console.log("Welcome user")
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return(result)
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


let squareRoot = function(number){
    let result = number * number
    return(result)
}


var numberOne = squareRoot(10)
var numberTwo = squareRoot(13)

console.log(numberOne)
console.log(numberTwo)


let farenheightToCelcius = function(dgrs){
    result = (dgrs - 32) *5 / 9
    return(result)
}


let dayOne = farenheightToCelcius(55)
let dayTwo = farenheightToCelcius(88)

console.log(dayOne)
console.log(dayTwo)