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
//  let array =[0,1,2,3,4];
//
//
// function pushZerotoEnd(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0){
//              let zero = arr.splice([i],1)
//             arr.push(zero[0])
//         }
//     }
// return arr
// }
//
// console.log(pushZerotoEnd(array));


// - Дано список імен.
let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function removeBar(name) {
    name = name.trimStart()
    name = name.trimEnd()
    for (let i = 0; i < name.length; i++) {
        if(name[i]===(' ')){
            const space = name[i];


        }
    }


    return name
}

console.log(removeBar(n1));


