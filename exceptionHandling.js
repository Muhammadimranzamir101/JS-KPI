// try {
//
//     console.log('Start of try runs');
//     setTimeout(()=>{
//         console.log('End of try runs')
//     },5000)
//
// } catch (err) {
//     console.log('Catch is ignored, because there are no errors'); // (3)
// }

//So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or,
// sometimes, “exceptions”.

// try {
//     setTimeout(function() {
//         noSuchVariable; // script will die here
//     }, 1000);
// } catch (err) {
//     console.log( "won't work" ); // Try-catch is not for invalid code
// }

let json = '{ "age": 30 }'; // incomplete data

try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.age) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    console.log(( user.age ));

} catch (err) {
    console.log(( "JSON Error: " + err.message )); // JSON Error: Incomplete data: no name
    console.log(err.name)
}
