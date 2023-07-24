"use strict";
let sales = 123456789;
let language = "typescript";
let is_published = true;
let type = "beginner";
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numbers = [];
numbers[0] = 1;
let users = [1, 'Mosh'];
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.5;
    }
    return income * 2.0;
}
let employee = {
    id: 11,
    name: "manas",
    joined: (date) => {
        console.info(`Joining date of ${employee.name} is ${date}`);
    }
};
employee.joined(new Date());
//# sourceMappingURL=index.js.map