// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMin() {
//
//     let min = arguments[0]
//     let max = arguments[0]
//
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {min = arguments[i]}
//         if (max < arguments[i]) {max = arguments[i]}
//     }
//     console.log(max)
//     return min
//
// }
//
// console.log(returnMin(2, 2, 3, 4, 1, -1));


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// function valueReturn(arr){
//     let valueArray= []
//     for (const arrElement of arr) {
//         for ( const value in arrElement ){
//             valueArray.push(arrElement[value])
//         }
//
//     }
//     return valueArray
// }
//
// function keyReturn(arr){
//     let keyArray= []
//     for (const arrElement of arr) {
//         for ( const key in arrElement ){
//             keyArray.push(key)
//         }
//
//     }
//     return keyArray
// }
//
// function showKeyOrValue(arr,keyesOrvalues){
//     if (keyesOrvalues==='keyes'){
//         console.log(keyReturn(arr));
//     }
//     if (keyesOrvalues === 'values'){
//         console.log(valueReturn(arr));
//     }
// }
//
// console.log(showKeyOrValue(usersWithId,'values'));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = [{num1: 2},
//     {num2: 53},
//     {num3: 244},
//     {num4: 21},
//     {num5: 22},
// ]
// console.log(array);
//
// function replaceArrObject(arr, iNumber) {
//
//     for (let i = 0; i < arr.length; i++) {
//         if (i === iNumber) {
//          const item = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i+1]=item
//         }
//     }
//     return arr
// }
//
// console.log(replaceArrObject(array, 3));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// let array =[1,0,6,0,3];
// let array = [0, 0, 1, 0,1,0,0,0,0];
//
//
// function pushZerotoEnd(arr) {
//     for (let i = arr.length; i >=0; i--) {
//
//         if (arr[i] === 0) {
//             let zero = arr.splice(i, 1)
//             arr.push(zero[0])
//
//         }
//     }
//     return arr
// }
// //
// console.log(pushZerotoEnd(array));


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//


//
// function trimBar(arr) {
//     let arrItems = []
//     arr = arr.trim()
//     for (const arrElement of arr) {
//         arrItems.push(arrElement)
//     }
//     for (let i = arrItems.length; i >= 0; i--) {
//         if (arrItems[i] === ' ' && arrItems[i + 1] !== ' ') {
//         } else if (arrItems[i] === ' ')
//             arrItems.splice(i, 1)
//     }
//     let str = ''
//     for (let i = 0; i < arrItems.length; i++) {
//         str += arrItems[i]
//     }
//     return str
// }
//
// console.log(trimBar(n1));
// console.log(trimBar(n2));
// console.log(trimBar(n3));


//
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function addBlock(){
//     document.body.innerHTML=`<div>Hello owu</div>`
// }
// addBlock()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addBlock(elementType,text){
//     // tegName = <${}>
//     document.body.innerHTML=`<${elementType}>${text}</${elementType}>`
// }
// addBlock('p','some text')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
const cars = [
    {
        model: 'Chevrolet Blazer RS',
        year: 2021,
        color: 'Cherry Red Tintcoa',
        horsepower: 1000
    },
    {
        model: 'Hyundai Kona Ultimate',
        year: 2020,
        color: 'Black',
        horsepower: 900
    },
    {
        model: 'Mercedes-Benz CLA 250 Base',
        year: 2019,
        color: 'Black',
        horsepower: 800
    },
    {
        model: 'Audi e-tron Premium',
        year: 2021,
        color: 'Black',
        horsepower: 700
    },
    {
        model: 'Chrysler Pacifica Hybrid',
        year: 2021,
        color: 'Red',
        horsepower: 600
    },
    {
        model: 'Ford Transit-350',
        year: 2021,
        color: 'Blue',
        horsepower: 500
    },
    {
        model: 'Acura TLX',
        year: 2021,
        color: 'White',
        horsepower: 400
    },
    {
        model: 'Audi A4',
        year: 2021,
        color: 'Black',
        horsepower: 300
    },
    {
        model: 'Audi e-tron',
        year: 2020,
        color: 'White',
        horsepower: 200
    },
    {
        model: 'Mazda CX-30 Base',
        year: 2021,
        color: ' Jet Black Mica',
        horsepower: 100
    }
]

// function addBlock(elementType, arr) {
//     for (const arrItem of arr) {
//
//         let addDiv = document.createElement('div')
//
//         addDiv.innerHTML = `<${elementType}>${arrItem.model}  </${elementType}>`
//         document.body.appendChild(addDiv)
//
//         // console.log(`${key}${arrItem[key]}`)
//
//     }
// }

// addBlock('p', cars)

//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function addBlock(elementType, arr) {
//     for (const arrItem of arr) {
//         let carPropDiv = document.createElement('div')
//         carPropDiv.style.backgroundColor = 'grey'
//         carPropDiv.style.marginBottom = '5px'
//
//         for (let carProperty in arrItem) {
//             let carPropDivInside = document.createElement('div')
//
//             carPropDivInside.innerHTML = `${carProperty}:${arrItem[carProperty]}`
//             carPropDiv.appendChild(carPropDivInside)
//             // document.body.appendChild(carPropDivInside)
//
//         }
//         carPropDiv.innerHTML = `/*<${elementType}>*/${carPropDiv}/*</${elementType}>*/`
//         document.body.appendChild(carPropDiv)
//
//     }
// }
//
// addBlock('p', cars)

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок




