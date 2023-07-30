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

console.clear();

/** Static property */

class Ride {
    // A private static property to keep track of the number of active rides.
    private static _activeRides: number = 0;

    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }

    /**
    * Get the number of currently active rides.
    * @returns The number of active rides.
    */
    static get activeRide(): number {
        return Ride._activeRides;
    }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(`Current active rides : ${Ride.activeRide}`);

/**Inheritance */

//Super / base / Parent class
class Person {
    constructor(public firstName: string, public lastName: string) { }

    walk() {
        console.log("Walking...");
    }
    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

//Child / Sub class
class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log("Taking the test!");
    }
}
class Teacher extends Person {
    // Method Overrideing
    override get fullName(): string {
        return 'Professor ' + super.fullName;
    }
}
const student1 = new Student(1, "manas", "shinde");
console.log("Student Full Name : " + student1.fullName);

const teacher1 = new Teacher("Mosh", "Hamadani");
console.log("Teacher Full Name : " + teacher1.fullName);
