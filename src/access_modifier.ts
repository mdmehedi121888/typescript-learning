class BankAccount {
  constructor(
    public id: number,
    public name: string,
    protected _balance: number
  ) {}

  getBalance() {
    console.log(`Balance: ${this._balance}`);
  }

  addDeposit(amount: number) {
    return (this._balance = this._balance + amount);
  }
}

class StudentsAccount extends BankAccount {
  constructor(public id: number, public name: string, initialDeposit: number) {
    // Use `initialDeposit` to initialize the balance in the parent class.
    super(id, name, initialDeposit);
  }

  getBalance() {
    console.log(`Student account balance: ${this._balance}`);
  }

  withdraw(amount: number) {
    if (amount > this._balance) {
      console.log("Insufficient balance!");
    } else {
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
