// - Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.getElementById('text');
//
// text.onclick = () => {
//
//     text.style.display= 'none'
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('button2')
// btn.onclick = () => {
//     btn.style.display= 'none'
// }

//
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.forms.textForm
//
// form.button3.onclick = () => {
//     if (form.inputText.value>=18){
//         return alert(`u are older then 18`)
//     }return  alert(`u are younger then 18`)
//
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let tittleElement = document.getElementById('tittle')
// let menu = document.getElementById('menu')
//
//
// tittleElement.onclick = () => {
//     if (menu.style.display === 'none') {
//         menu.style.display = 'block'
//     } else {
//         menu.style.display = 'none'
//     }
//
// // }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

//
// let comments = [{title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti2'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti3'}
// ]
// for (let i = 0; i < comments.length; i++) {
//
//     let div = document.createElement('div')
//     div.innerHTML = `<div> ${comments[i].title} <button id='hideComments${i}'>Close</button> <br> <div id="commentBody${i}">${comments[i].body}</div> </div>`
//     document.body.appendChild(div)
//
//
//     let button = document.getElementById(`hideComments${i}`)
//
//     button.onclick = () => {
//         if (document.getElementById(`commentBody${i}`).style.display === 'none') {
//             document.getElementById(`commentBody${i}`).style.display = 'block'
//         } else {
//             document.getElementById(`commentBody${i}`).style.display = 'none'
//         }
//     }
// }
//
// - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form2 = document.forms.Form2
// let form3 = document.forms.Form3
//
// let button = document.getElementById('getInfoButton');
//
// button.onclick = () => {
//     console.log(form2.inputText.value)
//     console.log(form2.firstCheckbox.checked)
//     console.log('---------------------------')
//
//     console.log(form3.inputText.value)
//     console.log(form3.secondCheckbox.checked)
// }
//

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function createTable(trNumber, tdNumber, value) {
//     let table = document.createElement('table')
//     for (let i = 0; i < trNumber; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < tdNumber; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     let element = document.getElementsByTagName(value)
//
//     element[0].appendChild(table)
//
// }
//
// createTable(3, 6,'p')


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let buttonRight = document.getElementById('right')
// let buttonLeft = document.getElementById('left')
// let images = document.getElementsByClassName('imgItem')
// console.log(images);
// let i = 0
// buttonRight.onclick = () => {
//     images[i].classList.add('hidden')
//     i++
//     if (i >= images.length) {
//         i = 0
//     }
//     images[i].classList.remove('hidden')
//
// }
// console.log(images.length)
// buttonLeft.onclick = () => {
//     images[i].classList.add('hidden')
//     i--
//     if(i<0){
//         i=images.length-1
//     }
//     images[i].classList.remove('hidden')
// }