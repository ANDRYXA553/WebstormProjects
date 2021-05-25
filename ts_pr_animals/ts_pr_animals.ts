interface Animals {
    moveType: string;
    saying: string;
    info: () => string

}

class Fish implements Animals {
    moveType: 'swim';
    saying: 'ooo';

    info(): string {
        return `Fish saing ${this.saying} and hes movetype is ${this.moveType}`
    }


}
class Bird implements Animals {
    moveType: 'flying';
    saying: 'цвіріньк';

    info(): string {
        return `Bird saing ${this.saying} and hes movetype is ${this.moveType}`
    }


}
class Cat implements Animals {
    moveType: 'run';
    saying: 'meow';

    info(): string {
        return `CAT saing ${this.saying} and hes movetype is ${this.moveType}`
    }


}

