//--------------------------- 1. push() Method ----------------------------------------------------
// Adding elements at the end of an array

var number_arr = [ 10, 20, 30, 40, 50 ];
var string_arr = [ "Banana", "Orange", "Apple", "Mango" ];

number_arr.push(60);

// We can pass multiple parameters to the push()
number_arr.push(70, 80, 90);

// string_arr contains
string_arr.push("Pineapple", "Grapes");

// Printing both the array after performing push operation
console.log("After push op on num_arr " + number_arr);
console.log("After push op on str_arr " + string_arr);

//-----------------------------pop()----------------------------------------------------------------
//removes last element of the array

console.log(number_arr.pop())

//2.------------------------- Unshift() Method-------------------------------------------------------
// Adding element at the beginning of an array

number_arr.unshift(05, 80);

string_arr.unshift("Apple", "Strawberry");

// Printing both the array after performing unshift operation
console.log("After unshift op " + number_arr);
console.log("After unshift op " + string_arr);

//3---------------------------IsArray() Method------------------------------------------------------
//Returns true if the argument is an array, or false otherwise.

console.log(Array.isArray(number_arr))

console.log(number_arr.length)

//---------------------------toString()-------------------------------------------------------------

console.log(number_arr.toString())

//----------------------------join()----------------------------------------------------------------
//Joins all elements of an array into a string.
//You can supply the separator
console.log(number_arr.join('-'))

//----------------------------lastIndexOf()---------------------------------------------------------
//Search for the last occurrence of element:

console.log(number_arr.lastIndexOf(80))
console.log(number_arr.lastIndexOf(99))

//----------------------------concat()--------------------------------------------------------------
//Merges elements of two arrays in single array

let merge = number_arr.concat(string_arr)

console.log(merge)
