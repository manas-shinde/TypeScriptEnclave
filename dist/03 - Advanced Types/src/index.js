"use strict";
let emp = {
    id: 11,
    name: "Rohan",
    joined: (date) => {
        console.info(`Joining date of ${emp.name} is ${date}`);
    }
};
emp.joined(new Date());
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.info(`10 kg = ${kgToLbs(10)} lbs`);
console.info(`50 kg = ${kgToLbs('50kg')} lbs`);
let testBox = {
    drag: () => { },
    resize: () => { }
};
let limit = 50;
function greet(name) {
    if (name)
        console.log(`Greetings! ${name.toUpperCase()} `);
    else
        console.log('Hola!');
}
greet(null);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
const user = [
    {
        name: "manas",
        age: 24,
        occupation: 'SWE'
    },
    {
        name: 'Akshay Patil',
        age: 23
    }
];
//# sourceMappingURL=index.js.map