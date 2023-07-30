class Account {
    /**
     * Create a new Account instance with the provided parameters.
     * @param id The unique identifier for the account (read-only property).
     * @param owner The name of the account owner.
     * @param _balance The initial balance of the account (private property).
     */
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
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

