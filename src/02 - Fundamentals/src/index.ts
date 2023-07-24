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