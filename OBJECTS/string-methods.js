let name = 'Nolan Beyer'

// length porperty
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// icludes method

let password = 'abcpassword123'

console.log(password.includes('password'))

let greeting = '    hello world    '

console.log(greeting.trim())


let isPasswordValid = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isPasswordValid('answer1274'))


let isEmailValid = function(email){
    return email.length > 8 && email.includes('@')
} 

console.log(isEmailValid('nolan@eyer'))