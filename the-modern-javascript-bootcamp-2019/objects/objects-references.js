// Lecture:
//   Object - by default in javascript was reference.

let myAccount = {
    name: 'John Doe',
    expenses: 0,
    income: 0
};

let otherAccount = myAccount; // Object still reference.

otherAccount.income = 1000;

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
};

addExpense(myAccount, 2.50);
console.log(myAccount);

// Challenge

// Objective:
//   Add Income
//   Reset Account
//   Get Account SUmmary
//   Sample Output: Account for John Doe has $900. $1000 in income. $100 in expeses.

// Action Flow:
//   addIncome
//   addExpense
//   addExpense
//   getAccountSummary
//   resetAccount
//   getAccountSummary

let bankAccountManagementChallenge = function () {

    let bankAccount = {
        name: 'John Doe',
        expenses: 0,
        income: 0
    };

    let addExpense = function (account, amount) {
        account.expenses = account.expenses + amount;
    };

    let addIncome = function (account, amount) {
        account.income = account.income + amount;
    };

    let resetAccount = function (account) {
        account.expenses = 0;
        account.income = 0;
    };

    let getAccountSummary = function (account) {
        let balance = account.income - account.expenses;
        return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expeses.`;
    };

    addIncome(bankAccount, 2000);
    addExpense(bankAccount, 2.50);
    addExpense(bankAccount, 160);
    console.log(getAccountSummary(bankAccount));
    resetAccount(bankAccount);
    console.log(getAccountSummary(bankAccount));
};

bankAccountManagementChallenge();
