
const account = {
    name: 'Nolan Beyer',
    expenses: [],
    income: [],
    addExpneses: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function(){
        let totalIncome = 0
        let totalExpenses = 0
        let accountBalance = 0

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of ${accountBalance}. $${totalIncome} in income. And $${totalExpenses} in expneses`
    }
}

account.addIncome('Car sold', 5000)
account.addExpneses('Coffee', 10)
account.addExpneses('Rent', 1000)
console.log(account.getAccountSummary())

// Expense -> description, ammount
// Add expense -> description, amount
// Get account summary -> total up all expenses -> Nolan Beyer has $1250 in expenses

// 1. Add income array to account
// 2. Add income method -> description, amount
// 3. Tweak getAccountSummary

// Nolan beyer has a balance og $10 . 100 in income. $90 in expenses



