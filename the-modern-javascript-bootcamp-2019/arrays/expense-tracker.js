// Project

// Part I
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Dash Reyes has $1250 in expenses.

// Part II
// add income array to account
// addIncome -> description, amount
// Tweak getAccountSummary

const account = {
    name: 'Dash Reyes',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        });
        this.income.forEach(function (income) {
            totalIncome += income.amount;
        });

        let balance = totalIncome - totalExpenses;

        return `${this.name} has a balance of ${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);

console.log(account.getAccountSummary());
