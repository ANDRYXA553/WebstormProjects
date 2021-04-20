// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
// //
// function wakeUp(cb) {
//     console.log('wakeup process');
//     setTimeout(() => {
//         cb(null, 'wake up done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function takeASHOWER(cb) {
//     console.log('shower process');
//     setTimeout(() => {
//
//         cb(null, 'shower done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function breakfast(haveTime ,cb) {
//     console.log('breakfast process');
//     setTimeout(() => {
//         if(haveTime===true){
//         return cb(null, 'breakfast done')
//         }return cb('have no time for brackfast')
//
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function runPc(cb) {
//     console.log('run pc');
//     setTimeout(() => {
//         cb(null, 'run  PC done')
//
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function homeWork(tasks,cb) {
//     console.log('homework process');
//     setTimeout(() => {
//         if(!(tasks>20)){
//
//           return   cb(null, ' homework done')
//         }return cb ('today we have a lot of tasks.CHILL IS CANCELED ')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function chill(cb) {
//     console.log(' chill process');
//
//     setTimeout(() => {
//         cb(null, 'chill done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
//
// wakeUp((err, data) => {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
//     takeASHOWER((err, data) => {
//         if (!err) {
//             console.log(data);
//         } else {
//             console.log(err);
//         }
//         breakfast(false,(err, data) => {
//             if (!err) {
//                 console.log(data);
//             } else {
//                 console.log(err);
//             }
//             runPc((err, data) => {
//                 if (!err) {
//                     console.log(data);
//                 } else {
//                     console.log(err);
//                 }
//                 homeWork(30,(err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         chill((err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                             } else {
//                                 console.log(err);
//                             }
//
//                         })
//                     } else {
//                         console.log(err);
//                     }
//
//
//                 })
//
//             })
//
//         })
//
//     })
// })


// ПРОМІСИ

// //
// function wakeUp() {
//     console.log('wakeup process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('wake up done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
//
// }
//
// function takeASHOWER() {
//     console.log('shower');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('shower process done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function breakfast(havetime) {
//     console.log('breakfast process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (havetime === true) {
//                 resolve('breakfast done')
//             } else {
//                 resolve('have no time for brackfast')
//             }
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function runPc() {
//     console.log('run pc');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('running PC done')
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
// }
//
// function homeWork(tasks) {
//     console.log('doing homework');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (tasks < 20) {
//                 resolve(' homework done')
//             } else {
//
//                 reject('today we have a lot of tasks.CHILL IS CANCELED')
//             }
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function chill() {
//     console.log('chilling');
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('chilling done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// wakeUp().then(value => {
//     // debugger
//     console.log(value);
//     return takeASHOWER()
// })
//     .then(value => {
//         console.log(value);
//         return breakfast(false)
//     })
//     .then(value => {
//         console.log(value);
//         return runPc()
//     })
//     .then(value => {
//         console.log(value);
//         return homeWork(10)
//     })
//     .then(hw_Tasks => {
//         console.log(value);
//         return chill()
//     })
//     .then(value => console.log(value))
//     .catch(err => {
//         console.log(err)
//     })


// ASYNC AWAIT
//
//
// function wakeUp() {
//     console.log('wakeup process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('wake up done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
//
// }
//
// function takeASHOWER() {
//     console.log('shower');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('shower process done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function breakfast(havetime) {
//     console.log('breakfast process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (havetime === true) {
//                 resolve('breakfast done')
//             } else {
//                 resolve('have no time for brackfast')
//             }
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function runPc() {
//     console.log('run pc');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('running PC done')
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
// }
//
// function homeWork(tasks) {
//     console.log('doing homework');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (tasks < 20) {
//                 resolve(' homework done')
//             } else {
//
//                 reject('today we have a lot of tasks.CHILL IS CANCELED')
//             }
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function chill() {
//     console.log('chilling');
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('chilling done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// async function start(){
// try{
//    let func = await wakeUp();
//    console.log(func);
//
//    func = await takeASHOWER();
//    console.log(func);
//
//    func = await breakfast(true);
//    console.log(func);
//
//    func = await runPc();
//    console.log(func);
//
//    func = await homeWork(40);
//    console.log(func);
//
//    func = await chill();
//    console.log(func);
// }catch (err){
//     console.log(err)
// }
// }
// start();
