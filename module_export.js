module.exports = class Square {
    constructor(width) {
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }

    volume() {
        return this.width ** 3;
    }
};

// class Square {
//     constructor(width) {
//         this.width = width;
//     }
//
//     area() {
//         return this.width ** 2;
//     }
//
//     volume() {
//         return this.width ** 3;
//     }
// };
//
//
//
// const areaFunction = (width) => {
//     const mySquare = new Square(width);
//     return mySquare.area();
// };
//
// module.exports = areaFunction()
//
