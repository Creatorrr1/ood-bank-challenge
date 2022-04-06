class Print {
  constructor() {}

  transactionToString(transaction) {
    let s = "";

    s = s + transaction.date;
    // console.log('here:',s,transaction.date)
    s = s + " || ";
    if (transaction.type === "credit") {
      // `${this.transaction.date} || ${this.transaction.amount} ||  || ${this.transaction.balance}`
      s = s + transaction.amount;
      s = s + " || ";
      // add credit
      // add empty debit
    } else {
      s = s + " || ";
      s = s + transaction.amount;
      // add empty credit
      // add debit
    }
    s = s + " || ";
    s = s + transaction.balance;
    // add balance

    return s;
  }

  statement(transaction) {
    const statement = [];
    console.log("Before statement:", statement);
    // statement.push("date || credit || debit || balance");
    for (let i = 0; i < transaction.length; i++) {
      statement.push(this.transactionToString(transaction[i]));
    }
    console.log("After statement:", statement);
    const reverseStatement = statement.reverse();
    reverseStatement.unshift("date || credit || debit || balance");
    return reverseStatement.join("\n");
  }
}

module.exports = Print;
