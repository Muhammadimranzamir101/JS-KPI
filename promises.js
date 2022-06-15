var promise = new Promise(function(resolve, reject) {
    const x = "123";
    const y = 123
    if(x == y) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function () {
    console.log('Success');
}).
catch(function () {
    console.log('Some error has occurred');
});
