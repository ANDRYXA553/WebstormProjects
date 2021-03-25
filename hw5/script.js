//
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let numbers = [1,2,3,4,5];
// let strs = ['first','second','third','fourth','fifth'];
// let mix =[1,2,'first',true];
//
// let array = [];
// array[1] = true;
// array[2] = false;
// array[3] = 3;
// array[4] = 'wawda';
// console.log(array[2]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0;i<10;i++ ) {
//     document.write(`<div> fsafsa</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++){
//     document.write(`<div>dsa ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//     document.write(`<h1>321321</h1>`)
//     i++
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while ( i <20  ){
//     document.write(`<h1>321321 ${i}</h1>`);
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1,2,3,4,5,6,7,8,9,0]
// for (let i=0 ;i < array.length; i++){
//     console.log(array[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array =['ecq','uytq','ewgf','ewq','bvc','ewq','erew','das','321','rew',];
//
// for (let i = 0; i <array.length; i++){
//
//     console.log(array[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array =['ecq','uytq','ewgf',false,11,'ewq','aaa',222,221,true,];
//
// for (let i = 0; i <array.length; i++){
//
//     console.log(array[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array =['ecq','uytq','ewgf',false,11,'ewq','aaa',222,221,true,];
//
// for (let i = 0; i<array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i])
//     }
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array =['ecq','uytq','ewgf',false,11,'ewq','aaa',222,221,true,];

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i]==="number"){
//         console.log(array[i])
//     }
//
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array =['ecq','uytq','ewgf',false,11,'ewq','aaa',222,221,true,];
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string"){
//         console.log(array[i])
//     }
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let  array= [];
//
// array[0]=2;
// array[1]=1;
// array[2]=true;
// array[3]='rwqrwq';
// array[4]='rwq1rwq';
// array[5]=321;
// array[6]='dsa';
// array[7]='rwqrwq';
// array[8]=false;
// array[9]=323341;
// array[10]='rwqrwq';
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`крок ${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//
// for (let i = 0; i < 100; i++) {
//
//     console.log(`крок ${i}`)
// document.write(`крок ${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i = i+2) {
//     console.log(`крок ${i}`)
//     document.write(`крок ${i}`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if( (i % 2) === 0){
//         console.log(i);
// document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if( (i % 2) === 1){
//         console.log(i);
// document.write(i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 60; j++) {
//
//         console.log(j)
//
//     }
// }

// // - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let stop = 0 ;
//
//
// for (let i = 0; i <=2; i++) {
//     if (stop===1){
//         break
//     }
//     for (let j = 0; j < 60; j++) {
//         if (j === 60) {
//             j = 0
//         }
//         if (stop===1){
//             break
//         }
//         for (let k = 0; k < 60; k++) {
//             console.log(`години: ${i} хвилин ${j} секунд ${k} `)
//             if (k === 0 && i === 2 && j===0) {
//                  stop=1;
//                 break
//             }
//         }
//     }
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//  let array = [ 'a', 'b', 'c'];
//  let word = ''
// for (let i = 0; i < array.length; i++) {
//     word = word +array[i]
// }
// console.log(word);
//

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let word = ''
// let i = 0
//
// while (i<array.length){
//     word = word + array[i];
//     i++;
// }
// console.log(word)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let word = ''
//
// for (const i of array) {
//     word += i
// }
// console.log(word)






