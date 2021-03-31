// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//   let mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'red'
// mainHeader.innerText = 'feb-2021'

// b) робить шириниу елементу ul 400px
//
// let ulElement = document.getElementsByTagName('ul')
// for (let i = 0; i < ulElement.length; i++) {
//     ulElement[i].style.width = '400px'
//     ulElement[i].style.backgroundColor = 'grey'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkLists = document.getElementsByClassName('linkList')
// for (let i = 0; i < linkLists.length; i++) {
//     linkLists[i].style.width= '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// let listElement2Text = document.querySelector('.listElement2 a')
//
// console.log(listElement2Text.innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

//
// let listElement2Text = document.getElementsByTagName('li')
// for (let i = 0; i < listElement2Text.length; i++) {
//     listElement2Text[i].style.backgroundColor = 'grey'
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

//
// let listElement2Text = document.getElementsByTagName('a')
// for (let i = 0; i < listElement2Text.length; i++) {
//     listElement2Text[i].classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let listElement2Text = document.getElementsByTagName('a')
// for (let i = 0; i < listElement2Text.length; i++) {
//     if(listElement2Text[i].innerText === 'link3'){
//         listElement2Text[i].style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let listElement2Text = document.getElementsByTagName('a')
// let xxx
// for (let i = 0; i < listElement2Text.length; i++) {
//      xxx = listElement2Text[i].innerText
//     for (let j = 0; j < xxx.length; j++) {
//         listElement2Text[i].classList.add(`${xxx}`)
//     }
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let listSubHeader = document.getElementsByClassName('sub-header')
//
// let color = prompt('Enter name!')
//
// for (let i = 0; i < listSubHeader.length; i++) {
//     listSubHeader[i].style.backgroundColor = `${color}`
// }
// //

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let listSubHeader = document.getElementsByClassName('sub-header')
// let color = prompt('Enter name!')
//
// for (let i = 0; i < listSubHeader.length; i++) {
//     if (listSubHeader[i].innerHTML === 'content 2 segment') {
//         listSubHeader[i].style.backgroundColor = `${color}`
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let listConten1 = document.getElementsByClassName('content_1')
// let text = prompt('Enter text')
//
// for (let i = 0; i < listConten1.length; i++) {
//     listConten1[i].innerHTML = `${text}`
// }

// l) отримати елементи p та змінити їм padding на 20px

// let listP = document.getElementsByTagName('p')
// for (let i = 0; i < listP.length; i++) {
//     listP[i].style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// let listP = document.getElementsByClassName('text2')
//
// for (let i = 0; i < listP.length; i++) {
//     listP[i].innerHTML = 'FEB-2021'
// }

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// for (let i = 0; i < rules.length; i++) {
//     let rulesDiv = document.createElement('div')
//     rulesDiv.className= `rules rule ${i}`
//     rulesDiv.innerHTML= `<h2>${rules[i].title}</h2> <p> ${rules[i].body}</p>`
//     document.body.appendChild(rulesDiv)
// }


//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// //
// let newArr= [...usersWithId]
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
//
//
// for (let useridElement of usersWithId) {
//
//
//     for (let citiesIdElement of citiesWithId) {
//         if (useridElement.id === citiesIdElement.user_id) {
//
//             delete citiesIdElement.user_id
//             newArr.addres = citiesWithId;
//         }
//     }
// }
// console.log(usersWithId)
// console.log(newArr);