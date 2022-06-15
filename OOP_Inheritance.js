//Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class Employee extends person{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Emp ID: ${this.id}`);
    }
}
let Employee1 = new Employee('Muhammad Imran',22229);
console.log(Employee1.toString());
