class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;        // amount passed in for transaction
    this.account = account;       // object (instance of Account class) passed in -->  myAccount = { username: 'meow patrol', balance: 0 };
  }
  commit(){
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction { // takes 2 values: amount, account
  get value() {
    return -this.amount;        //
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
const myAccount = new Account('meow-patrol');

const t1 = new Withdrawal('10', myAccount);
t1.commit();
console.log(t1);


