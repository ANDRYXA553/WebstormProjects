// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, producer, year, maxspeed, engineCapacity) {
//
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxspeed = maxspeed
//     this.engineCapacity = engineCapacity
//
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     this.info = function () {
//         if (this.driver) {
//             console.log(`Model:${this.model},Prodecer:${this.producer},Year: ${this.year}, MaxSpeed :${this.maxspeed},EngineCapacity:${this.engineCapacity},Driver ${this.driver.driverName},${this.driver.driverExp}`
//             )
//         }else {
//         console.log(`Model:${this.model},Prodecer:${this.producer},Year: ${this.year}, MaxSpeed :${this.maxspeed},EngineCapacity:${this.engineCapacity}`
//         )}
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = newSpeed;
//         console.log(`New speed :${this.maxspeed}`)
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear
//     }
//
//     this.addDriver = function (driverName, driverExp) {
//         this.driver = {driverName: driverName, driverExp: driverExp}
//     }
// }
//
// let bwm = new Car('bmv', 'dd', '2089', '500', '200l',)
// console.log(bwm)
// bwm.increaseMaxSpeed(5100)
// bwm.addDriver('bogdan', '300')
// bwm.info()


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//
// class Car {
//     constructor(model, producer, year, maxspeed, engineCapacity) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxspeed = maxspeed
//         this.engineCapacity = engineCapacity
//
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info() {
//         if (this.driver) {
//             console.log(`Model:${this.model},Prodecer:${this.producer},Year: ${this.year}, MaxSpeed :${this.maxspeed},EngineCapacity:${this.engineCapacity},Driver ${this.driver.driverName},${this.driver.driverExp}`
//             )
//         } else {
//
//             console.log(`Model:${this.model},Prodecer:${this.producer},Year: ${this.year}, MaxSpeed :${this.maxspeed},EngineCapacity:${this.engineCapacity}`
//             )
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = newSpeed;
//         console.log(`New speed :${this.maxspeed}`)
//     }
//
//     changeYear(newYear) {
//         this.year = newYear
//     }
//
//     addDriver(driverName, driverExp) {
//         this.driver = {driverName: driverName, driverExp: driverExp}
//     }
// }
//
// let lamb = new Car('gt', 'lamb', '2002', '250', '2.2')
// lamb.addDriver('vasya', 20)
// lamb.increaseMaxSpeed(300)
// lamb.drive()
// lamb.changeYear(2010)
// lamb.info()
// console.log(lamb)

//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Cinderella{
//     constructor(name,age,footSize) {
//         this.name=name
//         this.age=age
//         this.footSize=footSize
//     }
//
// }
// class Prince{
//     constructor(name,age,footSize) {
//         this.pName=name
//         this.pAge=age
//         this.pFootSize=footSize
//     }
// }
// let cinderellas =[]
// for (let i = 0; i < 10; i++) {
//     let cinderellaName = `Cinderella${i}`;
//     let cinderellaAge = Math.floor(Math.random()*(30-18)+18);
//     let cinderellaFootSize = Math.floor(Math.random()*(44-34)+34);
//     cinderellas[i] = new Cinderella(cinderellaName,cinderellaAge,cinderellaFootSize)
//
// }
// console.log(cinderellas)
//
// let prince1 = new Prince(undefined,22,38)
//
// for (let cinderellaElement of cinderellas) {
//     if(prince1.pFootSize===cinderellaElement.footSize && prince1.pAge=== cinderellaElement.age ){
//
//         console.log(`the prince:prince1 found his cinderella${cinderellaElement.name}`)
//     }
//
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// function CinderellaCreate(name, age, footsize) {
//     this.name = name
//     this.age = age
//     this.footsize = footsize
// }
//
// let cinderellas = []
// for (let i = 0; i < 10; i++) {
//     let cinderellaName = `Cinderella${i}`;
//     let cinderellaAge = Math.floor(Math.random() * (30 - 18) + 18);
//     let cinderellaFootSize = Math.floor(Math.random() * (44 - 34) + 34);
//     cinderellas[i] = new CinderellaCreate(cinderellaName, cinderellaAge, cinderellaFootSize)
// }
// console.log(cinderellas)
//
// function PrinceCreate(name, age, footsize) {
//     this.pName = name;
//     this.pAge = age;
//     this.pFootsize = footsize;
//     this.cinderellaChoose = function cinderellaChoose(arr, footsize) {
//         for (let cinderellaElement of arr) {
//             if (footsize === cinderellaElement.footsize) {
//
//                 console.log(`the prince1 found his ${cinderellaElement.name}`)
//             }
//         }
//     }
// }
//
// let prince1 = new PrinceCreate(undefined, 22, 38)
// prince1.cinderellaChoose(cinderellas, 38)