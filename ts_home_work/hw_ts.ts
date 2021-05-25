class Deputat {
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
}

class Partia {
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

    TheMostHabarnikLog(): {} {

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

class VerhovnaRada {
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

    showChoosenPartia(name: string) {
        const foundPartia = this.partias.filter(value => value.name === name)
        console.log(foundPartia)
    }

    theMostHabarnikRadi():{}{
       const theMostHabarnikRadi=this.partias.reduce((previousValue, currentValue) => {
            if(previousValue.TheMostHabarnikLog()>currentValue.TheMostHabarnikLog()){
                return previousValue
            }return currentValue

        })
        return theMostHabarnikRadi
    }
}

const dep1 = new Deputat(0,'Anton', 32, 'male', 75);
const dep2 = new Deputat(1, 'Petro', 45, 'male', 30, 2000);
const dep3 = new Deputat(2, 'Svitlana', 29, 'female', 45, 1000);
const dep4 = new Deputat(3, 'Andriy', 54, 'male', 63);
const dep5 = new Deputat(4, 'Kateryna', 44, 'female', 20, 3000);
const dep6 = new Deputat(5, 'Ostap', 23, 'male', 80);
const dep7 = new Deputat(6, 'Maria', 34, 'female', 70);
const dep8 = new Deputat(7, 'Stepan', 61, 'male', 10, 5000);
const dep9 = new Deputat(8, 'Arsen', 26, 'male', 52);

const part1 = new Partia('SVOBODA', dep1, [dep1, dep2, dep9]);
const part2 = new Partia('SLUGA', dep8, [dep8, dep3, dep5]);
const part3 = new Partia('SAMOPOMICH', dep6, [dep6, dep4, dep7]);

const rada = new VerhovnaRada([part2, part3]);


