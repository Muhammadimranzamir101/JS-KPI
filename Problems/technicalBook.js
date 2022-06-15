let booksAvailable = require('./booksAvailable');

class technicalBook extends booksAvailable{

    constructor(title, author, ISBN, numCopies,Edition) {
        super(title, author, ISBN, numCopies);
        this.Edition = Edition;
    }

    getEdition(ISBN){
        return `Edition of ${this.ISBN} is ${this.Edition}`
    }
}

let b1 = new technicalBook('Smoke K Chootyape','Muhammad Imran','09333499444444',5, "First");
console.log(b1.getEdition(b1.ISBN));
