//Maps---> Maps are collections of keys and values of any type, in simple word Map is a collection of key-value pairs.

//In other words, Map has characteristics of both Object and Array:
//
// Like an object, it supports the key-value pair structure.
// Like an array, it remembers the insertion order.

// const map = new Map([
//     ['name'],
//     ['type', 'blog'],
//     ['writer', 'Tapas Adhikary'],
// ]);
//
// console.log(map);

// create a map
const map1 = new Map();

// Add values to the map
map1.set('name', 'freeCodeCamp');
map1.set('ja', 'freeCodeCamp');
map1.set('writer', 'Tapas Adhikary');
map1.set(4,'Imran') //Key is not string

// console.log(map1.get('writer')) // get value of key

console.log(map1)

// let obj = {name:'Imran'}
// map1.set(obj,true)// insertion of object as key in map
//
// console.log(map1)
//
// console.log(map1.size)
//
// console.log(map1.has('blog')) // Checks whether an element is present in the map or not.
// console.log(map1.has('writer'))
//
// console.log(map1.delete('writer'))// Deletion of element from map
//
// console.log("map after deletion :: ",map1)
//
// map1.clear() // Clearing every element of map
//
// console.log(map1)
//
// let map2 = new Map([
//         ["Name","Muhammad Imran"],
//         ["Class","BSCS"],
//         ["Id",16101100]
// ])
//
// console.log(map2)
// console.log(map2.keys())
// console.log(map2.values())
// console.log(map2.entries()) // Every entry in the form of array.
