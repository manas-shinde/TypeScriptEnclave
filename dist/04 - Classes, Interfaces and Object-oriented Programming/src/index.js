"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error(`Please provide amount greature than Zero!`);
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    calculateTax() {
    }
}
let account1 = new Account(1, "manas", 15000);
console.info(account1);
console.info(account1 instanceof Account);
//# sourceMappingURL=index.js.map