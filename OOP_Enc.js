//encapsulation example
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}

let person1 = new person('Muhammad Imran',22229);
person1.add_Address('Karachi');
person1.getDetails();

// Abstraction example
function Person(fname,lname){
    let firstname = fname;
    let lastname = lname;

    //Not accessible because no refernece to the variable, only way is to access with this
     getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }

    //Accessible because accessing with this.
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
console.log('Abstraction ::::::')
let person2 = new Person('Muhammad','Imran');
console.log(person2.firstname);
console.log(person2.getDetails_noaccess);
console.log(person2.getDetails_access());
