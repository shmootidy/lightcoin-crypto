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

console.log('Before transactions:', myAccount.balance);

const t1 = new Withdrawal(10, myAccount);
t1.commit();
// console.log(t1);
console.log('After withdrawal:', myAccount.balance);

const t2 = new Deposit(250, myAccount);
t2.commit();
// console.log(t2);
console.log('After deposit:', myAccount.balance);

console.log();


