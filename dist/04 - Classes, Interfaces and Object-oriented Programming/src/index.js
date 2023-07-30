"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error(`Please provide amount greature than Zero!`);
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set ownerName(changedName) {
        this.owner = changedName;
    }
    calculateTax() {
    }
}
let account1 = new Account(1, "manas", 15000);
console.info(account1);
console.info(account1 instanceof Account);
console.log(account1.balance);
account1.ownerName = "manas shinde";
//# sourceMappingURL=index.js.map