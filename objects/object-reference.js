const myAccount={
    name: "fatma momhamed",
    expenses: 0,
    income: 0,
}

const addExpense=function (account,amount) {
    account.expenses+=amount
}

const addIncome = function (account, amount) {
    account.income += amount
}

const getAccountSummary=function(account){
    account.balance=account.income-account.expenses
    return `account for ${account.name} has ${account.balance} balance,${account.income} in income and ${account.expenses} in expenses`
}

const restAccount=function (account) {
    account.expenses=0
    account.income=0
}

addExpense(myAccount,100)
addIncome(myAccount,1000)
console.log(getAccountSummary(myAccount))
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
restAccount(myAccount)
console.log(getAccountSummary(myAccount))
