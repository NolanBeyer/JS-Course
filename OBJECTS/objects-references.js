let myAccount = {
    name: 'Nolan',
    income: 0,
    expenses: 0,
}

let addIncome = function(account, incomes){
    account.income = account.income + incomes
}

let addExpenses = function(account, expense){
    account.expenses = account.expenses + expense
}

let resetAccount = function(account){
    account.income = '0',
    account.expenses = '0',
    account.savings = '0'
}

let accountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${myAccount.name} has a $${balance} remaing balance. $${account.income} in income and $${account.expenses} in expenses.}`
}

addIncome(myAccount, 5000)
addExpenses(myAccount, 2500)
accountSummary(myAccount)

console.log(myAccount)





    // let myAccount = {
    //     name: 'nolan',
    //     expenses: 0,
//         income: 0
//     }

//     let addExpense = function(account, amount){
//         account.expenses = account.expenses + amount
//     }

//     addIncome

//     resetAccount

//     getAccountSummary
//     Account for Andrew has $900. $1000 in income. $100 in expesnes.


//     addExpense(myAccount, 5)
//     console.log(myAccount)



// let myAccount = {
//     checking: 500,
//     savings: 2000,
//     income: 1500
// }

// let myWage = function(account, wage){
//     account.savings = account.savings + wage
// }

//  myWage(myAccount, 1000)
// console.log(myAccount)


// let myAccount = {
//     name: 'Nolan',
//     income: 0,
//     expenses: 0,
//     balance: 0
// }

// let addExpenses = function(account, amount){
//     account.expenses = account.expenses + amount
// }

// let addIncome = function(account, income){
//     account.income = account.income +income
// }

// let getAccountSummary = function(account){
//     account.balance = account.income - account.expenses
// }

// let resetAccount = function(account){
//     account.expenses = 0,
//     account.income = 0
// }




// let myAccount = {
//     name: 'Nolan Beyer',
//     income: 0,
//     expenses: 0,
//     balance: 0
// }

// let fullName = function(account){
//     account.name = account.name 
// }

// let myIncome = function(account, wage){
//     account.income = account.income + wage
// }

// let myExpenses = function(account, bills){
//     account.expenses = account.income - bills
// }

// let mySavings = function(account){
//     account.balance = account.income - account.expenses
// }

// let clearAccount = function(account){
//     account.income = 0
//     account.expenses = 0 
//     account.balance - 0
// }



//  monthlyIncome = myIncome(myAccount, 5500)
//  myExpenses(myAccount, 2500)
//  clearAccount(myAccount)

 

//  console.log(`my name is ${myAccount.name} my income is $${myAccount.income} a month my expenses are ${myAccount.expenses}. Which leaves my balance every month at ${myAccount.balance}`)




