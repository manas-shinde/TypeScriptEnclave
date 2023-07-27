/*
Type Aliases in TS
*/

type Employee = {
    // id can't be overwritten, once you define
    readonly id: number,
    name: string,
    //function
    joined: (date: Date) => void
}


let emp: Employee = {
    id: 11,
    name: "Rohan",
    joined: (date: Date) => {
        console.info(`Joining date of ${emp.name} is ${date}`);
    }
};

// Call the 'joined' method and pass the current date as the argument
emp.joined(new Date());


/* Union Types */

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.info(`10 kg = ${kgToLbs(10)} lbs`);
console.info(`50 kg = ${kgToLbs('50kg')} lbs`);

