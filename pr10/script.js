// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let xWords = ['qwert', 'ewq', 'xxx']
//
// let inputText = document.getElementById('inputText')
// let button = document.getElementById('buttonCheck')
//
//
// button.onclick = () => {
//     for (const xWord of xWords) {
//         if (inputText.value.toLowerCase()==xWord){
//             alert('НЕГАРНО ТАК ПИСАТИ')
//         }
//
//     }
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let xWords = ['qwert', 'ewq', 'xxx']
//
// let inputText = document.getElementById('inputText')
// let button = document.getElementById('buttonCheck')
//
//
//
// button.onclick = () => {
//     for (const xWord of xWords) {
//         if (inputText.value.toLowerCase().indexOf(xWord)!==-1){
//             alert('НЕГАРНО ТАК ПИСАТИ')
//         }
//
//     }
// }
//
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

let hs = document.querySelectorAll( 'h2')




hs.forEach((value, key) => {

 let a = document.createElement('a')
    a.href= `${value}`
    a.innerHTML=value.textContent


    document.body.append(a)
})




