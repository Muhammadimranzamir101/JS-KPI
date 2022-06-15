
class booksAvailable{
    constructor(title, author, ISBN, numCopies) {
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this.numCopies=numCopies;
    }

    getAvailability(ISBN){
        //0 out of stock
        if(this.numCopies===0)
        {
            return `The Book ${ISBN} is Out of Stock`;
        }
        //<10 low stock
        else if(this.numCopies<10){
            return `The Book ${ISBN} is low in Stock`;
        }
        //>=10 in Stock
        else{
            return `The Book ${ISBN} is in Stock`;
        }
    }

    sell(numSold){
        return `There are ${this.numCopies -= numSold} copies of ${this.ISBN} remaining`;
    }

    reStock(numCopies){
        return `Total stock of ${this.ISBN} is ${this.numCopies+=numCopies} after restock`;
    }
}

let b1 = new booksAvailable('Smoke K Chootyape','Muhammad Imran','09333499444444',5);
console.log(b1.getAvailability(b1.ISBN));
console.log(b1.sell(5));
console.log(b1.getAvailability(b1.ISBN));
console.log(b1.reStock(15));
console.log(b1.getAvailability(b1.ISBN));

module.exports = booksAvailable;
