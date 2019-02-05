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
  isAllowed(){
    if (this.value + this.account.balance < 0){
      console.log('Sorry. Insufficient funds. 💸');
      return false;
    }
    return true;
  }
  commit(){                       // called by t1.commit()
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      console.log(`Transaction completed. Current balance is $${this.account.balance}.`);
    }
  }
}

class Withdrawal extends Transaction {
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

const t2 = new Deposit(100, myAccount);
t2.commit();


