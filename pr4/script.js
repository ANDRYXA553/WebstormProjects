// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// const str='Привіт';
// const num=132;
// const flag=true;
// const txt='true';
// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt));

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3,
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//  let a1= 5+3;
//  let a2= 5-3;
//  let a3= 5*3;
//  let a4= 5/3;
//  let a5= 5%3;


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6= 5 % 3;
// let a7= 3 % 5;
// let a8= 5 * '3';
// let a9= '5' - 3;
// let a10= 75 + 'кг';
// console.log(a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// const height = 23;
// const width = 10;
// const s = (1/2 *(width*height));
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// const heightC = 10;
// const dC = 4;
// const v =3.14*( Math.pow((1/2) * dC,2 )) * heightC  ;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// const n = 3;
// const m = 4;
// const k =Math.sqrt(n**2 + m**2);
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str='Hello world';
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Сивик Андрій \n' +  '18 \n' + 'Плавання \n')

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1='Хто';
// let str2='ти';
// let str3='такий?';
// let concatenation =(str1 + ' ' + str2 + ' ' + str3);
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = '20';
// let a = 5;
// document.write(str + 5  + "<br/>") ;  /*відповідь 205; тому що число 5 перетворюжється в строку і стоки конкатенуються;*/
// document.write(str - a + "<br/>");   /* відповідь 15 ; тому що від строки не можна відняти 5 , тому str перетворюється в число ,і вони просто віднімаються;*/
// document.write(str * "2" + "<br/>");  /*відповідь 40 ; тому що від строку не можна помножити на строку , тому str і "2" перетворюються в число ,і множаться як числа;*/
// document.write(str / 2 + "<br/>");    /*відповідь 10 ; пояснення таке саме як з відніманням*/

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

//     parseInt("3.14"); /*в консольці виведеться 3;*/
//     parseInt("-7.875"); /* в консольці виведеться -7;*/
//  console.log(parseInt("435")) /*в консольці виведеться 435;*/
// (parseInt("Вася");  /*консольці виведеться NaN;*/

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

/*let str = prompt("Enter something", "ho-ho");
console.log(str);*/

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

/*
let a= +(prompt('Firstnumber'));
let b= parseFloat(prompt('Secondnumber'));
let c = a + b;
alert('Сума:'+ c);
*/

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

/*
const name =prompt('Введіть імя:');
 const surname =prompt('Введіть фамілію:');
 const age =prompt('Введіть вік:');

 alert('Доброго вечера' +' ' + surname +' ' + name +', ' +'мої привітання, що вам' +' ' + age +'.' );
*/


// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// const a = prompt('Введіть перше число');
// const b = prompt('Введіть друге число');
// const c = prompt('Введіть третє число');
//
//
// if (a < b && a < c){
//     if (b < c){
//         alert('Найменше число:' + a + ' \n' + 'СЕреднє' + b+ ' \n' + 'НАЙБІЛЬШЕ' + c )
//     }
//     else {
//         alert('Найменше число:' + a + ' \n' + 'СЕреднє' + c+ ' \n' + 'НАЙБІЛЬШЕ' + b )
//     }
// }
// if (b < a && b < c){
//     if (a < c){
//         alert('Найменше число:' + b + ' \n' + 'СЕреднє' + a+ ' \n' + 'НАЙБІЛЬШЕ' + c )
//     }
//     else {
//         alert('Найменше число:' + b + ' \n' + 'СЕреднє' + c+ ' \n' + 'НАЙБІЛЬШЕ' + a )
//     }
// }
// if (c < a && c < b){
//     if (b < a){
//         alert('Найменше число:' + c + ' \n' + 'СЕреднє' + b+ ' \n' + 'НАЙБІЛЬШЕ' + a )
//     }
//     else {
//         alert('Найменше число:' + c + ' \n' + 'СЕреднє' + a+ ' \n' + 'НАЙБІЛЬШЕ' + b )
//     }
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// const a=prompt('введи світло чєл');
//
// if (a==='зелений'){
//     console.log('Йди')
// }else if (a==='жовтий'){
// console.log('почекай')
// }else if(a==='червоний') {
//     console.log('стій')
// }else {
//     console.log('роби що хочеш')
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// const a = prompt('введи світло чєл');
// const isRoadClear = prompt('машини є?')
//
// if (a === 'зелений') {
//     if (isRoadClear === 'так') {
//         console.log('Йди')
//     } else if (isRoadClear === 'ні') {
//         console.log('піжди поки порушники проїдуть')
//     }
// }
// if (a === 'жовтий') {
//     if (isRoadClear === 'так') {
//         console.log('почекай')
//     } else if (isRoadClear === 'ні') {
//         console.log('всеодно рано чекай')
//     }
// }
// if (a === 'червоний') {
//     if (isRoadClear === 'так') {
//         console.log('стій і рано')
//     } else if (isRoadClear === 'ні') {
//         console.log('стій і чекай')
//     }
// }
// else {
//     console.log('dsadsa')
// }

