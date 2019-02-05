class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.amount;
  }
}





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('meow-patrol');

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);
console.log(1, myAccount.balance);


t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);
console.log(2, myAccount.balance);



t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('T3:', t3);
console.log(3, myAccount.balance);



