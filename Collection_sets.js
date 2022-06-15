// The Set object lets you store unique values of any type, whether primitive values or object references.

const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]

console.log(mySet1)

const o = {a: 1, b: 2}
//const o = {a: 1, a: 2} // only one would be accepted
mySet1.add(o)

console.log(mySet1)

// mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
//
// console.log(mySet1)
//
// console.log(mySet1.has(1) )                     // true
// console.log(mySet1.has(3)  )                    // false, since 3 has not been added to the set
// console.log(mySet1.has(5)  )                    // true
// console.log(mySet1.has(Math.sqrt(25)) )            // true
// console.log(mySet1.has('Some Text'.toLowerCase()))    // true
//
//
//
// console.log(mySet1.has(o));       // true
//
// console.log(mySet1.size)         // 5
//
// mySet1.delete(5)    // removes 5 from the set
// console.log(mySet1.has(5)   )    // false, 5 has been removed
//
// console.log(mySet1.size)         // 4, since we just removed one value
//
// console.log(mySet1)
