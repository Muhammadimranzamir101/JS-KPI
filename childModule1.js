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
