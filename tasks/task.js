// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"

// function distribute(value){
//
//
//     console.log((value.toString()));
//
//
// }
// distribute(321)

//
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)


//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88

//  let arr=[1,6,9,0,17,88,4,7];
//
// let anum = arr.reduce((acc,current)=>{
//      if (acc>current){
//         return acc
//     }
//     return current
// })
// console.log(anum);


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


let array = 'Hello world'
//
// function delay() {
//
//     return new Promise(resolve=>  setTimeout (resolve,Math.random() * (3000 - 1000)) + 1000)
// }
// async function delayedLog(item) {
//     await delay();
//     console.log(item);
//
// }
// async function startPrintArray(arr) {
//     for( const item of arr){
//         await delayedLog(item)
//     }
// }
// startPrintArray(array)

function print(arr,cb) {

    for (const item of arr) {


    }
}

print(array)

// ПРОМІСИ

//  function wakeUp(){
//    console.log('prosunaiys');
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve( 'YA  PROSNUVSI done')
//       },Math.floor(Math.random() * (3000 - 1000)) + 1000)
//    })

// }

// function takeASHOWER(){
//    console.log('shower');
//    return new Promise((resolve,reject)=>{ setTimeout(()=>{
//       resolve('YA  POMUVSI done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};
// function breakfast(){
//    console.log('snudaiy');
//    return new Promise((resolve,reject)=>{  setTimeout(()=>{
//       resolve('YA  posnidav done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// function runPc(){
//    console.log('zapuskau pc');
//    return new Promise((resolve,reject)=>{ setTimeout(()=>{
//       resolve('YA  zapustiv PC done')

//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// function homeWork (){
//    console.log('doing homework');
//    return new Promise((resolve,reject)=>{  setTimeout(()=>{
//       resolve(' homework done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// function csgoWithDUDES (){
//    console.log('PLAYING CSGO');


//    return new Promise((resolve,reject)=>{   setTimeout(()=>{
//       resolve('cgo playing done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// wakeUp().then(value=>{
//    console.log(value);
//    return takeASHOWER()
// })
// .then(value=>{
//    console.log(value);
//    return breakfast()
// })
// .then(value =>{
//    console.log(value);
//    return runPc()
// })
// .then(value=>{
//    console.log(value);
//    return homeWork()
// })
// .then(value=>{
//    console.log(value);
//    return csgoWithDUDES()
// })
// .then(value=>console.log(value))



// ASYNC AWAIT


// function wakeUp(){
//    console.log('prosunaiys');

//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve( 'YA  PROSNUVSI done')
//       },Math.floor(Math.random() * (3000 - 1000)) + 1000)

//    })

// }

//  function takeASHOWER(){
//    console.log('shower');
//    return new Promise((resolve,reject)=>{ setTimeout(()=>{
//       resolve('YA  POMUVSI done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};
//  function breakfast(){
//    console.log('snudaiy');
//    return new Promise((resolve,reject)=>{  setTimeout(()=>{
//       resolve('YA  posnidav done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};


// start()
// function runPc(){
//    console.log('zapuskau pc');
//    return new Promise((resolve,reject)=>{ setTimeout(()=>{
//       resolve('YA  zapustiv PC done')

//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// function homeWork (){
//    console.log('doing homework');
//    return new Promise((resolve,reject)=>{  setTimeout(()=>{
//       resolve(' homework done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};

// function csgoWithDUDES (){
//    console.log('PLAYING CSGO');

//    return new Promise((resolve,reject)=>{   setTimeout(()=>{
//       resolve('cgo playing done')
//    },Math.floor(Math.random() * (3000 - 1000)) + 1000)

// })};



// async function start(){

//    let func = await wakeUp();
//    console.log(func);

//    func = await takeASHOWER();
//    console.log(func);

//    func = await breakfast();
//    console.log(func);

//    func = await runPc();
//    console.log(func);

//    func = await homeWork();
//    console.log(func);

//    func = await csgoWithDUDES();
//    console.log(func);
// }

