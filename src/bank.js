const Print = require("./print")

class Bank {
  constructor() {
    this.transaction = [];
    this.balance = 0;
  }

  deposit(amount, date) {
    // update the balance
    this.balance += amount;
    // create a transaction and store it
    const transactionStatement = {
      amount: amount,
      date: date,
      balance: this.balance,
      type: "credit",
    };
    this.transaction.push(transactionStatement);
  }

  withdraw(amount, date) {
    // update the balance
    this.balance -= amount;
    // create a transaction and store it
    const transactionStatement = {
      amount: amount,
      date: date,
      balance: this.balance,
      type: "debit",
    };
    this.transaction.push(transactionStatement);
  }


  printStatement() {
    const print = new Print()
    return print.statement(this.transaction)
  }
}

module.exports = Bank;
