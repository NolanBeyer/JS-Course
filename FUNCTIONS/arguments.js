// let add = function(a, b){
//     return a + b
// }

// let result = add(10, 1)
// console.log(result)



// let name = function(name1, name2){
//     return name1 + " " + name2
// }

// let result = name("Nolan",  "Beyer")
// console.log(result)


// let team = function(a, b){
//     return a + " " + b
// }

// let result = team("Saints", "Bengals")
// console.log(result)


// let bands = function(a, b){
//     return a + ", " + b
// }

// let result = bands("RHCP", "NIRVANA")
// console.log(result)

// // Default arguments

// let getScoreText = function(name, score){
//     return name + ", " + score
// }

// let result = getScoreText("Nolan", 5)
// console.log(result)




// let getTip = function(total, tipPercent = .2){
//     return total * tipPercent
// }

// let result = getTip(78, .2)

// console.log(result)


// let scoreBoard = function(name, score){
//     return "Name: " + name + " - Score " + score
// }

// let result = scoreBoard("Nolan", 15)
// console.log(result)







// let getTip = function(total, tipPercent){
//     return total * tipPercent
// }

// let result = getTip(50, .3)
// console.log(`the bill is ${50} are tip is ${result}`)



// let getTip = function(total, tipPercent){
//     let percent = tipPercent * 100
//     let tip = total * tipPercent
//     return `a ${percent}% tip on $${total} would be $${tip}`
// }

// let tip = getTip(75, .4)
// console.log(tip)



let getTip = function(total, tipPercent){
    let percent = 100 * tipPercent
    let tip = total * tipPercent
    return `a ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(95, .3)
console.log(tip)