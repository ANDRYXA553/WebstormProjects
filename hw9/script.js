// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
let arr = [1, 2, 4, 5, 99, -1, 44, 6, 7, 3, 89, 77, 66, 54, 32, 43, 21, 57, 89, 8]
//  arr.sort((a,b)=>{
//     return a-b
//     }
//  )
// console.log(arr);
//     b) відсортувати його від більшого до меншого.
// arr.sort((a,b)=>{
//     if(b>a){
//         return 1
//     }return -1
//
// })
// console.log(arr);
//     c) Відфілтрувати числа які є кратними 3.
// let newarr=arr.filter(value => {
//     return !(value % 3);
// })
// console.log(newarr);
// d) Відфілтрувати числа які є більшими за 10.
// let newarr=arr.filter(value => {
//     return (value > 10);
// })
// console.log(newarr);
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// arr.forEach((a)=>{
//     document.write(`${a} `)
// })
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//
// let newarr =arr.map(value => value*3)
// console.log(newarr);
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

//  let newarr =arr.reduce((acc,currentvalue)=>acc+=currentvalue
// )
// console.log(newarr);
//
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
let strArr = ['Andriy', 'vasya', 'vitya', 'nastya', 'vika', 'taras', 'bogdan', 'vasil', 'stepan', 'nazar']

//  let newStrArr = strArr.sort()
// console.log(newStrArr);
// b) Відсортувати в зворотньому порядку
//
// let newStrArr = strArr.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     return -1
// })
// console.log(newStrArr);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

//  let newStrArr =strArr.filter(value => (value.length>4)
//
// )
// console.log(newStrArr);
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// let newStrArr= strArr.map(value => value=`Sam says ${value}`
// )
// console.log(newStrArr);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
//
//  let sortedUsers = users.sort((a,b)=>a.age-b.age)
// console.log(sortedUsers)

// let sortedUsers = users.sort((a,b)=>b.age-a.age)
// console.log(sortedUsers)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortedUsers = users.sort((a,b)=>a.name.length-b.name.length
//
// )
// console.log(sortedUsers);

// let sortedUsers = users.sort((a,b)=>b.name.length-a.name.length
//
// )
// console.log(sortedUsers);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let users1 = JSON.stringify(users)
// users1=JSON.parse(users1)
// let usersWithID = users.map((a, index) => {
//     a.id = index
//     return a;
// })
//
// console.log((usersWithID));
// console.log(users1)


// d) відсортувати його за індентифікатором
// usersWithID.sort((a, b) => b.id - a.id);
// console.log(usersWithID);
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

//  let usersWithApart = usersWithID.reduce((acc,value)=>{
//     if (value.isMarried){
//         value.apart=true
//         acc.push(value)
//     }
//     return acc
// },[])
// console.log(usersWithApart);




//
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
const cars = [
    {model: 'Honda ACCORD EX-L CVT', engine: 2.4, price: 10000, year: 2013, owner: {name: 'Vasia', age: 123, experience: 10}},
    {model: 'BMW 335D Sedan', engine: 3, price: 6500, year: 2011, owner: {name: 'Artem', age: 23, experience: 4}},
    {model: 'NISSAN TITAN XD S', engine: 5, price: 14500, year: 2016, owner: {name: 'Petro', age: 40, experience: 13}},
    {model: 'Ford Fiesta S Hatchback', engine: 1.6, price: 3000, year: 2016, owner: {name: 'Stepan', age: 19, experience: 1}},
    {model: 'Hyundai SANTA FE SE/LIMITED SUV', engine: 3.3, price: 4900, year: 2007, owner: {name: 'Anton', age: 59, experience: 30}},
    {model: 'JEEP CHEROKEE LIMITED SPORT UTILITY', engine: 2.4, price: 4000, year: 2016, owner: {name: 'Ihor', age: 30, experience: 10}},
    {model: 'Subaru FORESTER 2.5X LIMITED SUV 5', engine: 2.5, price: 5900, year: 2011, owner: {name: 'Ivan', age: 42, experience: 7}},
    {model: 'oyota CAMRY HYBRID', engine: 2.5, price: 7900, year: 2012, owner: {name: 'Oleh', age: 22, experience: 4}}
];
//    // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
console.log(cars);
for (let i = 0; i < cars.length/2; i++) {
    cars[i].engine=cars[i].engine+(cars[i].engine*0.1)
cars[i].driver =cars[i].owner.name
}
console.log(cars);
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
