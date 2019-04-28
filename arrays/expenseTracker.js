const account={
    name:"fatma",
    expenses:[],
    income:[],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount })
    },
    addIncome: function (description, amount) {
        this.income.push({ description, amount })
    },
    getExpensesSummary: function () {
        let expensesSum = 0
        let incomeSum=0
        this.expenses.forEach((item) => expensesSum += item.amount)
        this.income.forEach((item => incomeSum += item.amount))
        let balance=incomeSum-expensesSum
        return `${this.name} has balance $${balance}, income $${incomeSum} and expenses $${expensesSum} in his expenses`
    }
}

account.addExpense("rent",1000)
account.addExpense("coffee",10)
account.addIncome("salary",5000)
console.log(account)

console.log(account.getExpensesSummary())