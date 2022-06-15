//Synchronous Code

const makePBnJ=()=>{
    const bread = makeBread(); // Takes 1 hour
    const peanutButter = makePeanutButter(); // Takes 30 min
    const jelly = makeJelly(); // Takes 30 min
    const pbNj = construct(b,pb,j); // Takes 10 mins

    return pbNj;
}

//This synchronous Peanut Butter & Jelly function runs in order, one function after another.
// but what if we had a function that needed to be ran first and other functions couldn't be ran
// until after this function finishes. Let’s think of making bread from scratch. you can’t put the
// peanut butter and jelly on the bread until it’s made so you must wait until its done.
// With synchronous code it doesn’t wait it just does it. How can we fix it?

//Async Callbacks

const makePBnJ1=()=>{
    makebread(function (){
        putPeanutButter(function (){
            spreadJelly(function (){
                sandwichThem(function (bread,peanutButter,peanutButter){
                    //Welcome To Callback Hell
                });
            });
        });
    });
};

//Callback to Promise

const makePBnJ2= new Promise(function (resolve,reject){
    return makeBread()
        .then(putPeanutButter(peanut))
        .then(spreadJelly(jelly))
        .then(sandwichThem(sandwich))
        .catch(error=>new Error(error))
});
