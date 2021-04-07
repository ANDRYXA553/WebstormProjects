// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

// class Computer {
//     constructor(mem, cpuPower = 1000, name) {
//         this.mem = mem
//         this.cpuPower = cpuPower
//         this.name = name
//     }
//
//     powerOn() {
//         console.log('Your pc working now.')
//     }
// }

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

// class Laptop extends Computer {
//     constructor(mem = 1, cpuPower, name, diagonal = 15) {
//         super(mem, cpuPower, name);
//         this.diagonal = diagonal;
//         this.battery = cpuPower / (diagonal * mem)
//     }
// }

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

// class MiniLaptop extends Laptop {
//     constructor(mem, cpuPower, name, diagonal, weigth) {
//         super(mem, cpuPower, name, diagonal);
//         this.weigth = weigth;
//     }
//
//     powerOn() {
//         if (this.weigth >= 2 && this.battery <= 4) {
//             console.log('error ')
//         } else {
//             console.log('Your pc working now.')
//         }
//     }
// }
//
// let minilap1 = new MiniLaptop(3, 700, 'asus', 4, 5)
//
//
// console.log(minilap1);
// minilap1.powerOn()


// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// class GamerPC extends Computer {
//     constructor(mem, cpuPower = 1200, name,) {
//         super(mem, cpuPower, name);
//         this.fps = cpuPower / mem;
//     }
//
//     runGame(gameName) {
//         console.log(`You are playing ${gameName} with ${this.fps} FSP`)
//     }
//
//     changeMem(scaleSize = 2) {
//         if (scaleSize > 2) {
//             scaleSize = 2
//             return scaleSize
//         }
//         this.mem *= scaleSize
//     }
//
//     changeCpuPower(scaleSizePower = 0.1) {
//         if (scaleSizePower > 0.1) {
//             scaleSizePower = 0.1
//             return scaleSizePower
//         }
//         this.cpuPower = this.cpuPower + (this.cpuPower * scaleSizePower)
//     }
// }
//
// let gpc1 = new GamerPC(8, 700, 'samsung')
//
// gpc1.runGame('witcher')
// gpc1.changeMem(1.5)
// gpc1.changeCpuPower(0.05)
// console.log(gpc1)


// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

// class IgnorePC extends Computer {
//     constructor(mem, cpuPower, name) {
//         super(mem, cpuPower, name);
//         this.fps = (cpuPower / mem);
//     }
//
//     runGame(gameName) {
//         if (this.cpuPower <= 500) {
//
//             console.log('на цьому відрі ігри не запускаються.')
//
//         }
//         if (this.mem < 8) {
//             console.log('на цьому відрі ігри не запускаються.')
//         } else {
//             console.log(`Граєш в гру ${gameName} на ${this.fps}.`)
//         }
//         this.cpuPower = this.cpuPower - (this.cpuPower * 0.1)
//         this.fps = (this.cpuPower / this.mem);
//     }
//
// }
//
// let pcgame = new IgnorePC(9, 600, 'SSS')
// console.log(pcgame);
// pcgame.runGame('cyberpunk')
// console.log(pcgame);
// pcgame.runGame('cyberpunk')
