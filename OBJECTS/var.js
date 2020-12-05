var firstName = 'Nolan'
    firstName = 'James'

console.log(firstName)

// var is function scoped not block scoped

if (10 === 10) {
    let name = 'jen'
}

if (10 === 10) {
    var name = 'jen'
}

// with var we can still access the variable inisde the function

console.log(name)

age = 10
console.log(age)
var age
