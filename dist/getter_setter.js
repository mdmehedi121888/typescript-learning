"use strict";
class Account {
    constructor(name, _balance) {
        this.name = name;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const account = new Account("mehedi", 100);
console.log(account.balance);
console.log((account.deposit = 50));
console.log(account.balance);
