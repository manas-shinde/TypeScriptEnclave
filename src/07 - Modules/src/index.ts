import { Circles } from "./shapes";
//default import does not required the '{}'
import Store, { Format } from "./storage";

//Wild card import
import * as shapes from './shapes';

let myCircle = new Circles(5);
console.log(myCircle);


let mySquare = new shapes.Squre(6);
console.log(mySquare);



console.log(Format);