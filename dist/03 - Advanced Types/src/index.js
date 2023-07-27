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
//# sourceMappingURL=index.js.map