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
// let usersWithID = users.map((a, index) => {
//     a.id = index
//     return a;
// })
//
// console.log((usersWithID));


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