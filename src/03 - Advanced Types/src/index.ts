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


/* 
Union Types :
A union type describes a value that can be one of several types.
We use the vertical bar ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean .
 */

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.info(`10 kg = ${kgToLbs(10)} lbs`);
console.info(`50 kg = ${kgToLbs('50kg')} lbs`);


/*
Intersection type :
An intersection type combines multiple types into one. 
This allows you to add together existing types to get a single type that has all the features you need.
*/
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let testBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

/** Literal types */

type Quantity = 50 | 100;

let limit: Quantity = 50;

type Metric = 'cm' | 'inch';

/* Nullable Types */
function greet(name: string | null) {
    if (name)
        console.log(`Greetings! ${name.toUpperCase()} `);
    else
        console.log('Hola!');
}

greet(null);

/* Nullish Coalescing Operating */

let speed: number | null = null;
let ride = {
    //  Falsy (undefined, null, '', false, 0)
    //  Nullish coalescing operator
    //  if speed is not null or undefined
    speed: speed ?? 30
}

/** Exercise */
// 1)
type User = {
    name: string,
    age: number,
    occupation?: string
}

const user: User[] = [
    {
        name: "manas",
        age: 24,
        occupation: 'SWE'
    },
    {
        name: 'Akshay Patil',
        age: 23
    }
]

// 2

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

type Pet = Bird | Fish;

// 3)
type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

