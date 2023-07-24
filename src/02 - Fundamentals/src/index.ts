//Built-in types 

let sales: number = 123_456_789;

let language: string = "typescript";
let is_published: boolean = true;

//we dont need to explicity mention the data type if we are initializing the variable with value
let type = "beginner";


// Any Type

let level;                     // any
// this is against the idea of typescript,
// and you'd better not use it

level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}

// Arrays
// In javascript array contains the different types of values.So will declaring the array we should explicity mention the type of array.

let numbers: number[] = [];
numbers[0] = 1;
// numbers[1] = '1'; //invalid line


// Tuples (internally it's plain javascript array)

let users: [number, string] = [1, 'Mosh'];

//function
//Always declare return type for function
//And un-comment the  1) "noUnusedLocals": true, 2) "noUnusedParameters": true,  3)  "noImplicitReturns": true,
//for better code implementation
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.5;
    }
    return income * 2.0;
}

//Object 

let employee: {
    readonly id: number,
    name: string,

    //function
    joined: (date: Date) => void
} = {
    id: 11,
    name: "manas",
    joined: (date: Date) => {
        console.info(`Joining date of ${employee.name} is ${date}`);
    }
};

// Call the 'joined' method and pass the current date as the argument
employee.joined(new Date());
