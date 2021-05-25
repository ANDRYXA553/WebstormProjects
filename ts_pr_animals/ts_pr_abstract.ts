abstract class Shape {

    abstract perimetr(): {}

    abstract area(): {}

}

class Triagle extends Shape {
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
        return this.a*this.b*this.c;
    }

}
class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;

    }

    perimetr(): {} {
        return this.a + this.b     }

    area(): {} {
        return this.a*this.b;
    }

}


const TRIANGLE=new Triagle(4,2,4)
const RECTANGLE=new Rectangle(4,4)

const figures:Array<object> = [TRIANGLE,RECTANGLE];

console.log(figures)




