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
    //Getters and Setters
    get balance(): number {
        return this._balance;
    }

    set ownerName(changedName: string) {
        this.owner = changedName;
    }
    private calculateTax() {

    }
}

/* Creating Objects */

let account1 = new Account(1, "manas", 15000);

console.info(account1);
console.info(account1 instanceof Account);

//calling getter
console.log(account1.balance);
// calling setter
account1.ownerName = "manas shinde";


/** Index Signature Property
 * 
 * Index signature is used to represent the type of object/dictionary when the values of the object are of consistent types.
 *  Syntax: { [key: KeyType] : ValueType }
 */
class SeatAssignment {
    //seat number - A1, A2, ...
    //Index Signature Property
    [seatNumber: string]: string
}

const seat = new SeatAssignment();
seat.A1 = "Mosh";
seat['A2'] = "Omkar";

