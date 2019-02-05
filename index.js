class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    let balance = 0;
    this.transactions.forEach(transaction => {
      balance += transaction.value;
    })
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;         // amount passed in for transaction
    this.account = account;       // object (instance of Account class) passed in -->  myAccount = { username: 'meow patrol', transactions: [] };
  }
  commit(){                       // called by t1.commit()
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction { // takes 2 values: amount, account
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
const myAccount = new Account('meow-patrol');

const t1 = new Withdrawal(10, myAccount);
t1.commit();


console.log(myAccount.balance);

