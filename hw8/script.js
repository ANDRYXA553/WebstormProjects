// Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

//
// function Attribute(tagename, description, atributs = [{titleOfAttr, actionOfAttr},]) {
//     this.tagName = tagename;
//     this.descriprion = description;
//     this.atributs = atributs
//
//
// }
//
// let p = new Attribute('p', 'Определяет текстовый абзац. Тег <p> является блочным элементом, всегда начинается с новой строки, абзацы текста идущие друг за другом разделяются между собой отбивкой. Величиной отбивки можно управлять с помощью стилей. Если закрывающего тега нет, считается, что конец абзаца совпадает с началом следующего блочного элемента.', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста'
// }])
// console.log(p)
//
// let div = new Attribute('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста'
// },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }])
// console.log(div)


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту


// class Atribute {
//     constructor(tagname, description, atributs = [{titleOfAttr, actionOfAttr}]) {
//         this.tagname = tagname || 'tagname'
//         this.description = description|| 'none'
//         this.atributs = atributs||[{}]
//     }
// }
//
// let h1 = new Atribute('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.', [{
//     titleOfAttr: 'align ',
//     actionOfAttr: 'Определяет выравнивание заголовка..'
// },
//     ])
// console.log(h1)
//
// let span = new Atribute('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',[])
//
// console.log(span)

//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
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
//         }
//
//         console.log(`Model:${this.model},Prodecer:${this.producer},Year: ${this.year}, MaxSpeed :${this.maxspeed},EngineCapacity:${this.engineCapacity}`
//         )
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

