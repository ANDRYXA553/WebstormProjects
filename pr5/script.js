// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a','b','c']
//
// for (let i = 1; i < 4; i++) {
//     array.push(i);
// }
// console.log(array)


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = [1, 2, 3];
// array.reverse();
// console.log(array);
//
//
//2(варік)
// let array = [1, 2, 3]
//
// for (let i = 0; i <3; i++) {
//     array.pop(i)
// }
// for (let j = 3; j > 0; j--) {
//     array.push(j)
// }
// console.log(array)


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6

// let array = [1, 2, 3]
//
// for (let i = 4; i < 7; i++) {
//     array.push(i)
// }
// console.log(array)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array = [1, 2, 3]
//
// for (let i = 6; i > 3; i--) {
//     array.unshift(i)
// }
//
// console.log(array)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let array = ['js', 'css', 'jq']
// let firstElement = array.shift()
// console.log(firstElement)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// let array = ['js', 'css', 'jq']
//
// let lastElement = array.pop()
// console.log(lastElement)


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let array = [1, 2, 3, 4, 5];
// let newArray = array.slice(3,5)
// console.log(newArray)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let array = [1, 2, 3, 4, 5];
// let newArray = array.slice(0,2)
// console.log(newArray)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

//
// let array = [1, 2, 3, 4, 5];
// let newArray = array.splice(0,1)
// console.log(newArray)


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array  = [1, 2, 3, 4, 5,];
// array.splice(2,1,"a","b","c")
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let array  = [1, 2, 3, 4, 5,];
// array.splice(1,0,"a","b",)
// array.splice(6,0,"c",)
// array.splice(8,0,"e",)
//
// console.log(array);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let array  = [1, 2, 3, 4, 5,6,7,8,9,10];
// for (const i of array) {
//     if(i %2){
//         console.log(array[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

//
// let array = [1, 2, 33, 4, 25, 62, 7, 48, 9, 10];
// let emptyArray = []
// for (let i = 0; i < array.length; i++) {
//     emptyArray.push(array[i])
// }
// console.log(emptyArray)


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [1, 2, 33, 4, 25, 62, 7, 48, 9, 10];
// let emptyArray = []
// for (let i = 0; i < array.length; i++) {
//     emptyArray[i] = array[i]
// }
// console.log(emptyArray)


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let array = [2,17,13,6,22,31,45,66,100,-18]
//     1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i = 0
// while (i<array.length){
//     console.log(array[i])
//     i++
// }

//     2. перебрати його циклом for
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i = 0;
//
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i=0
//
// while (i<array.length){
//     if (array[i] % 2===1){
//         console.log(array[i])
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
//         }
// 7. замінити кожне число кратне 3 на слово "okten"

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let name = 'okten';
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = name ;
//     }
// }
// console.log(array)

// 8. вивести масив в зворотньому порядку.

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// array.reverse()
// console.log(array);


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]




// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.


