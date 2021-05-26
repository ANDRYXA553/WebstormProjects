import {Shape} from "../abstractShape/abstractShape";

export class Triagle extends Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimetr(): {} {
        return this.a + this.b + this.c;
    }

    area(): {} {
        return this.a * this.b * this.c;
    }

}
