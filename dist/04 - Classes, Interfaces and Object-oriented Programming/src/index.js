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
class SeatAssignment {
}
const seat = new SeatAssignment();
seat.A1 = "Mosh";
seat['A2'] = "Omkar";
console.clear();
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRide() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log(`Current active rides : ${Ride.activeRide}`);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("Walking...");
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking the test!");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
const student1 = new Student(1, "manas", "shinde");
console.log("Student Full Name : " + student1.fullName);
const teacher1 = new Teacher("Mosh", "Hamadani");
console.log("Teacher Full Name : " + teacher1.fullName);
//# sourceMappingURL=index.js.map