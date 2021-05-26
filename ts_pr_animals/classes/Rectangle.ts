
import {Shape} from "../abstractShape/abstractShape";

export class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;

    }

    perimetr(): {} {
        return this.a + this.b
    }

    area(): {} {
        return this.a * this.b;
    }

}
