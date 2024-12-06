"use strict";
class BankAccount {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    getBalance() {
        console.log(`Balance: ${this._balance}`);
    }
    addDeposit(amount) {
        return (this._balance = this._balance + amount);
    }
}
class StudentsAccount extends BankAccount {
    constructor(id, name, initialDeposit) {
        // Use `initialDeposit` to initialize the balance in the parent class.
        super(id, name, initialDeposit);
        this.id = id;
        this.name = name;
    }
    getBalance() {
        console.log(`Student account balance: ${this._balance}`);
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient balance!");
        }
        else {
            this._balance -= amount;
            console.log(`Withdrawn: ${amount}, Remaining balance: ${this._balance}`);
        }
    }
}
// Usage
const obj = new BankAccount(1, "mh", 400);
obj.addDeposit(250);
obj.getBalance(); // Balance: 650
const obj2 = new StudentsAccount(2, "student1", 100);
obj2.getBalance(); // Student account balance: 100
obj2.withdraw(50); // Withdrawn: 50, Remaining balance: 50
obj2.withdraw(100); // Insufficient balance!
