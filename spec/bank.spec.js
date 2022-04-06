const Bank = require("../src/bank.js");
const Print = require("../src/print.js");

describe("Cohort", () => {
  beforeEach(function () {
    const bank = new Bank();
  });

  it(" deposits a transaction", () => {
    // setup
    const bank = new Bank();
    // execute
    bank.deposit(1000, "07-01-2012");
    bank.deposit(500, "08-01-2012");
    // verify
    expect(bank.balance).toEqual(1500);
    expect(bank.transaction.length).toEqual(2);
  });

  it("withdraws a transaction", () => {
    // setup
    const bank = new Bank();
    // execute
    bank.deposit(1000, "07-01-2012");
    bank.withdraw(500, "08-01-2012");
    // verify
    expect(bank.balance).toEqual(500);
    expect(bank.transaction.length).toEqual(2);
  });

  it("withdraws a transaction", () => {
    // setup
    const bank = new Bank();
    // execute
    bank.deposit(1000, "07-01-2012");
    // bank.printStatement()
    // console.log(bank.printStatement())
    bank.withdraw(500, "08-01-2012");
    // verify
    expect(bank.balance).toEqual(500);
    expect(bank.transaction.length).toEqual(2);
  });

  it("Print transaction statement", () => {
    // setup
    const bank = new Bank();
    // execute
    bank.deposit(1000, "10-01-2012");
    bank.deposit(2000, "13-01-2012");
    bank.withdraw(500, "14-01-2012");
    const print = bank.printStatement();
    // verify
    const expected = `date || credit || debit || balance
14-01-2012 ||  || 500 || 2500
13-01-2012 || 2000 ||  || 3000
10-01-2012 || 1000 ||  || 1000`;

    expect(print.length).toEqual(expected.length);
    expect(print).toEqual(expected);
  });

  it("transaction to string", () => {
    // setup
    // const bank = new Bank
    const print = new Print();
    // execute
    const transaction = {
      amount: 100,
      date: "15-01-2012",
      balance: 100,
      type: "credit",
    };
    // bank.transactionToString(transaction)
    // verify
    const expected = "15-01-2012 || 100 ||  || 100";
    expect(print.transactionToString(transaction)).toEqual(expected);
  });
});
