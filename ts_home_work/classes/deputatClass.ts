export class Deputat {
    id: number;
    name: string;
    age: number;
    gender: string;
    honestly: number;
    minimum?: number;

    constructor(id: number, name: string, age: number, gender: string, honestly: number, minimum?: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestly = honestly;
        this.minimum = minimum;
    }

    tryToGiveHabar(habarValue: number) {

        if (this.honestly > 50) {
            console.log('I AM HONESLY ,NO HABARS')
            return
        }
        if (this.honestly <= 50 && habarValue > (this.minimum * (this.honestly * 0.01) + this.minimum)) {
            console.log('ok i"ll take  money')
            return;
        }
        if (this.honestly <= 50 && (this.minimum < habarValue) && habarValue < (this.minimum * (this.honestly * 0.01) + this.minimum)) {
            console.log('oh i"ll think about it')
            return;
        }
        console.log('not enough')

    }
}
