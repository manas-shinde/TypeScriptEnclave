class Account {
    readonly id: number;
    owner: string;
    private _balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error(`Please provide amount greature than Zero!`);

        this._balance += amount;
    }
    getBalance(): number {
        return this._balance;
    }
    private calculateTax() {

    }
}

/* Creating Objects */

let account1 = new Account(1, "manas", 15000);

console.info(account1);
console.info(account1 instanceof Account);

