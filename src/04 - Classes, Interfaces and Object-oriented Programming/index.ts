class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error(`Please provide amount greature than Zero!`);

        this.balance += amount;
    }


}