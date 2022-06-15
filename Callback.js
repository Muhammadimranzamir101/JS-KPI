//A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

function isOdd(number) {
    return number % 2 != 0;
}
function isEven(number) {
    return number % 2 == 0;
}

function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));


