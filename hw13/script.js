function userBuilder(name, age, password, login) {
    let userName = name;
    let userAge = age;
    let _password = password;
    let userLogin = login;

    function getLogin() {
        return userLogin
    }

    function setLogin(newLogin, confirmPassword) {
        if (confirmPassword === _password) {
            userLogin = newLogin
        }
    }

    function setPassword1(login, newPass, oldPass) {
        if (login === userLogin && oldPass === _password) {

            let letterP = /(?=.*[0-9])/
            let newpassSTR = newPass.toString()
            if (newpassSTR.length >= 8 && newpassSTR.match(letterP)) {
                _password=newPass
                console.log('password changes done!')
            } else {
                console.log('wrong parametrs')
            }
        } else {
            console.log('wrong log or password')
        }
    }

    function setAge(newAge) {
        if (newAge <= userAge) {
            return console.log('cant change age for lower or same')
        }
        userAge = newAge
        console.log(`age set for ${newAge} done`)
    }

    return {
        setAge, setLogin, getLogin, setPassword1
    }

}

let qqq = 444444444
let qq = qqq.toString()

console.log(qq.length)
let user = userBuilder('reer', 20, 11, 4411);
(user.setLogin('vasya', 11))
user.setPassword1('vasya', 'ewqewq124', 11)
user.setPassword1('vasya', 'ewqewq124', 11)

console.log(user.getLogin());
user.setAge(21)
