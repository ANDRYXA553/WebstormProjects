// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let inputText = document.getElementById('inputText')
// let button = document.getElementById('buttonPush')
//
// button.onclick = () => {
//     console.log(inputText.value);
//     localStorage.setItem('inputValue', `${inputText.value}`)
//
// }
// inputText.value = localStorage.getItem('inputValue')
//
//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let form = document.forms.form
// console.log(form);
//
// let inputText1 = form.inputText
// let inputText2 = form.inputText2
// let [checkBox1,checkBox2] = form.checkBox
// let [radio1, radio2] = form.radioBtn
//
// let button = document.getElementById('buttonPush')
//
// window.onmousemove = () => {
//
//
//     localStorage.setItem('inputText1.value', `${inputText1.value}`)
//     localStorage.setItem('inputText2.value', `${inputText2.value}`)
//     localStorage.setItem('checkBox1', `${checkBox1.checked}`)
//     localStorage.setItem('checkBox2', `${checkBox2.checked}`)
//     localStorage.setItem('radio1', `${radio1.checked}`)
//     localStorage.setItem('radio2', `${radio2.checked}`)
//
// }
// inputText1.value = localStorage.getItem('inputText1.value')
// inputText2.value = localStorage.getItem('inputText2.value')
// checkBox1.checked = JSON.parse(localStorage.getItem('checkBox1'))
// checkBox2.checked = JSON.parse(localStorage.getItem('checkBox2'))
// radio1.checked = JSON.parse(localStorage.getItem('radio1'))
// radio2.checked = JSON.parse(localStorage.getItem('radio2'))

//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let input = document.getElementById('inputText3')

let button = document.getElementById('buttonPush')

let forward = document.createElement('button')
let back = document.createElement('button')
back.innerText = 'Back'
forward.innerText = 'Forward'
document.body.append(back, forward)



localStorage.setItem('array', JSON.stringify([]))
button.onclick = () => {
    localStorage.setItem(`array`, JSON.stringify(arr))
    let arr = JSON.parse(localStorage.getItem('array'))
    arr.push(input.value)
}


let i = 0


back.onclick = () => {
    let elements = JSON.parse(localStorage.getItem('array'))
    console.log(elements)
    --i
    if (i < 0) {
        i = elements.length - 1
    }
    input.value = elements[i]
}
forward.onclick = () => {
    let elements = JSON.parse(localStorage.getItem('array'))
    console.log(elements)
    i++
    if (i > elements.length - 1) {
        i = 0
    }
    input.value = elements[i]
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//



