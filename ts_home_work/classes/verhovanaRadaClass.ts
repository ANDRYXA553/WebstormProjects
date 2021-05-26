import {Partia} from "./partiaClass";

export class VerhovnaRada {
    partias: Array<Partia>


    constructor(partias: Array<Partia>) {
        this.partias = partias;
    }

    deletePartia(name: string): void {

        this.partias = this.partias.filter(value => value.name !== name)

    }

    showPartias(): void {
        this.partias.forEach(value => {
            console.log(value)
        })
    }

    showChoosenPartia(name: string) :void{
        const foundPartia = this.partias.filter(value => value.name === name)
        console.log(foundPartia)
    }

    theMostHabarnikRadi():void {

        let arrayOfMostHabarniks = []
        this.partias.forEach(value => {
                arrayOfMostHabarniks.push(value.DeputatsArray.reduce((previousValue, currentValue) => previousValue.honestly < currentValue.honestly ? previousValue : currentValue))
            }
        )
        const theMostHabarnik = arrayOfMostHabarniks.reduce((previousValue, currentValue) => previousValue.honestly < currentValue.honestly ? previousValue : currentValue)
        console.log(theMostHabarnik)
    }

}
