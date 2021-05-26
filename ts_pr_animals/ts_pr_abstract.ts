import {Rectangle, Triagle} from "./classes";

const TRIANGLE = new Triagle(4, 2, 4)
const RECTANGLE = new Rectangle(4, 4)


const figures = [TRIANGLE, RECTANGLE];


figures.forEach(value => {
        console.log(value.area())
    }
)



