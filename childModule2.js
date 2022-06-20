//Required package.cjs file to use import and export ===> file.mjs
// import {message1,a} from "./export.mjs";
// console.log(message1())
// console.log(a)


//equired package.cjs file to use require and module.export ===> file.js
const Square = require('./module_export');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
console.log(`The volume of mySquare is ${mySquare.volume()}`);

// import {areaFunction,a} from "./export.mjs"
// console.log(areaFunction(5))
//
// console.log(areaFunction(5))
