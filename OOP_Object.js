//OBJECTS --> Contains property and methods:
let person = {

    //Properties:
    first_name:'Muhammad',
    last_name: 'Imran',

    //Method:
    getFunction : function(){
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
    },

    //Object With in Object.
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}

console.log(person.getFunction());

//Object Constructor (Function)
function person_(first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

//Object Creation using Constructor Funciton.
let person1 = new person_('Muhammad','Imran');
let person2 = new person_('Ahmed','Raza');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

//Object Creation using object.Create()

//let person3 = Object.create(person_('Muhammad','Ahmed')); Not allowable, Only object can be used not function.
let person3 = Object.create(person);
person3.first_name='Ahmed';
person3.last_name='Khan';
console.log(person3);
console.log(person3.getFunction());

//Class in JS (ES5) --> Also an object.
class Vehicle {

    constructor(name, maker, engine) {
        this.name = name;
        this.maker =  maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor in Class
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());


