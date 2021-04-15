// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//

let form = document.forms.form
let nameText = form.nameText
let number = form.number
let birthday = form.birthday
let mail = form.mail
let job = form.job
let vacancy = form.vacancy


let users = []
let saveButton = document.getElementById('saveButton')
let showUsersButton = document.getElementById('showUsers')

saveButton.onclick = () => {
    let user = {
        userName: nameText.value || 'NEMA',
        userNumber: number.value || 'NEMA',
        userBirthday: birthday.value || 'NEMA',
        userMail: mail.value || 'NEMA',
        userJob: job.value || 'NEMA',
        userVacancy: vacancy.value || 'NEMA',
    }
    users.push(user)
    localStorage.setItem(`${nameText.value}`, JSON.stringify(user))

}
showUsersButton.onclick = () => {
    let findUser = document.getElementById('findUser')
    for (let key in localStorage) {
        if (findUser.value === key) {
            let foundUser = JSON.parse(localStorage.getItem(`${key}`))
            console.log(foundUser)
            nameText.value = foundUser.userName
            number.value = foundUser.userNumber
            birthday.value = foundUser.userBirthday
            mail.value = foundUser.userMail
            job.value = foundUser.userJob
            vacancy.value = foundUser.userVacancy

            let deletebutton = document.getElementById('deleteUsers')

            deletebutton.hidden = false
            deletebutton.onclick = () => {
                localStorage.removeItem(`${key}`)
                console.log(foundUser)
                nameText.value = ""
                number.value = ""
                birthday.value = ""
                mail.value = ""
                job.value = ""
                vacancy.value = ""
                deletebutton.hidden = !deletebutton.hidden
            }


            return
        }


    }
    return alert('not found')

}


