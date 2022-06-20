export let a = 5;

export const message1 = () => {
    const name = "Export";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};

class Square {
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


export const areaFunction = (width) => {
    const b = 66;
    const mySquare = new Square(width);
    return mySquare.area();
};

