class Account {
  constructor(public name: string, private _balance: number) {}
  get balance() {
    return this._balance;
  }

  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const account = new Account("mehedi", 100);
console.log(account.balance);
console.log((account.deposit = 50));
console.log(account.balance);
