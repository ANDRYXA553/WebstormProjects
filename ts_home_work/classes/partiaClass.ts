import {Deputat} from "./deputatClass";

export class Partia {
    name: string;
    headDeputat: Deputat;
    DeputatsArray: Array<Deputat>;


    constructor(name: string, headDeputat: Deputat, DeputatsArray: Array<Deputat>) {
        this.name = name;
        this.headDeputat = headDeputat;
        this.DeputatsArray = DeputatsArray;
    }

    deleteDeputat(name: string): void {
        this.DeputatsArray = this.DeputatsArray.filter(value => value.name !== name)

    }

    showHabarniki(): void {
        this.DeputatsArray.filter(value => {
            value.honestly <= 50 ? console.log(value.name, value.honestly) : false

        })
    }

    TheMostHabarnikLog(): object {

        const theMostHabarnik = this.DeputatsArray.reduce((previousValue, currentValue) => {
            if (previousValue.honestly > currentValue.honestly) {
                return previousValue
            }
            return currentValue

        })
        console.log(theMostHabarnik)
        return theMostHabarnik
    }

}
