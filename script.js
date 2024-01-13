//<------------------------------Login form events --------------------------------------->
let userName = document.getElementById("username");
let password = document.getElementById('password')
let passCheck = document.getElementById('passCheck').value = false


//check username is valid or not
const ValidUser = () => {
    let checkUser = document.getElementById("checkUser")
    checkUser.innerText = userName.value.length >= 8 ? '@' : 'X'
}

//password Validation
const ValidPass = () => {
    let checkPass = document.getElementById("checkPass")
    checkPass.innerText = password.value.length >= 8 ? '@' : 'X'
}

//password visiblity
const passVisible = () => {
    passCheck = passCheck == false ? true : false
    password.type = passCheck == true ? 'text' : 'password'
}

//Login Button Event
let loginData = () => {

    if (userName.value.length >= 8 && password.value.length >= 8) {
        console.log(username.value, password.value);
        userName.value = '';
        password.value = '';
    } else if (userName.value.length == 0 && password.value.length == 0) {
        alert("Please enter username & password")
    } else if (username.value.length < 8) {
        alert("Please Enter valid username");
        userName.focus();
    } else if (password.value.length < 8) {
        alert("Please Enter valid password");
        password.focus();
    } else {
        alert("Login Faild");
        userName.value = '';
        password.value = '';
    }

}
