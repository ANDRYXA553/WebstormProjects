// 1) створити функцію яка приймає масив та виводить його

// const  arr= [3,34,1,'23','ews',true]
// function f(getArray) {
//     console.log(getArray);
//  }
// f(arr)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// let arr = []
// function arrFilling(){
//     for (let i = 0; i < 100; i++) {
//         arr[i]= Math.floor(Math.random() * (100 - 1)) + 1;
//     }
//     f(arr)
// }
// arrFilling()


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function CalcMin(firstNum, secondNum, thirdNum) {
//     let min
//     if (firstNum <= secondNum && firstNum <= thirdNum) {
//         min = firstNum
//     }
//     if (secondNum <= firstNum && secondNum <= thirdNum) {
//         min = secondNum
//     }
//     if (thirdNum <= firstNum && thirdNum <= secondNum) {
//         min = thirdNum
//     }
//  return min
// }
// let min =CalcMin(4,-2,44)
// console.log(min);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function CalcMax(firstNum, secondNum, thirdNum) {
//     let max
//     if (firstNum >= secondNum && firstNum >= thirdNum) {
//         max = firstNum
//     }
//     if (secondNum >= firstNum && secondNum >= thirdNum) {
//         max = secondNum
//     }
//     if (thirdNum >= firstNum && thirdNum >= secondNum) {
//         max = thirdNum
//     }
//  return max
// }
// let max =CalcMax(4,-2,44)
// console.log(max);


// 5) створити функцію яка повертає найбільше число з масиву
// let arr = []
// function arrFilling(){
//     for (let i = 0; i < 100; i++) {
//         arr[i]= Math.floor(Math.random() * (100 - 1)) + 1;
//     }
//     return arr;
// }
// const array =arrFilling()
// console.log(array);
//
//
// function minFromArr(arr){
//
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]){
//             max = arr[i]}
//
//
//     }
//
//     return max
// }
// console.log(minFromArr(array));


// 6) створити функцію яка повертає найменьше число з масиву

// let array=[33,414,432,5554]
//
// function minFromArr(arr){
//
//     let min = arr [0]
//     for (let i = 0; i <arr.length; i++) {
//         if (min > arr[i]){
//             min = arr[i]}
//
//
//     }
//
//     return min
// }
//
// console.log(minFromArr(array));


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.


// function arrSum (){
//     let sum =0;
//     for (const argument of arguments) {
//         sum+=argument
//
//     }
//     return sum
// }
// let sum = arrSum(2,4,6,8);
// console.log(sum);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array=[33,414,432,5554]
//
// function arrSer (arr){
//     let serNum ;
//     let sum = 0
//     for (const item of arr) {
//         sum+=item;
//         serNum=sum/arr.length
//
//     }
//     return serNum
// }
//
// console.log(arrSer(array))


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
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
// console.log(keyReturn(usersWithId));


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

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
// console.log(valueReturn(usersWithId));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let firstArr = [1, 2, 3, 4]
// let secondArr = [2, 3, 4, 5]
//
//
// function sumArr(arr1, arr2) {
//     let sumArray = []
//     for (let i = 0; i < firstArr.length; i++) {
//         sumArray.push(firstArr[i]+secondArr[i])
//     }return sumArray
// }
//
// console.log(sumArr(firstArr, secondArr));

