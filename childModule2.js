// import {message1,a} from "./chidModule.mjs";
// console.log(message1())
// console.log(a)


const Square = require('./childModule1');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
console.log(`The volume of mySquare is ${mySquare.volume()}`);


