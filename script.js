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


//<------------------------------signup form events --------------------------------------->
let sPassword = document.getElementById("sPassword");
let sRePassword = document.getElementById("sRePassword");
let passCheck1 = document.getElementById('passCheck1').value = false
let passCheck2 = document.getElementById('passCheck2').value = false
let age = document.getElementById('age');


//Calculate Date
const setAge = () => {
    var dob = document.getElementById('dob');
    var dobValue = new Date(dob.value);
    let currentDate = new Date();

    age.value = dobValue.getFullYear() >= 2000 ? `+${currentDate.getFullYear() - dobValue.getFullYear() - 1}` : '';
}
//Select country to set country contact code
let country = document.querySelector('#country');
let countryCode = document.getElementById('countryCode'); // span id

country.addEventListener("click", function () {
    var code = country.value == "India" ? '+91'
        : country.value == "Usa" ? '+1'
            : country.value == "China" ? '+86'
                : country.value == "Japan" ? '+81'
                    : country.value == "Pakistan" ? '+92'
                        : '';

    countryCode.innerText = code;
});

//password visiblity (Password)
const passVisible1 = () => {
    passCheck1 = passCheck1 == false ? true : false
    sPassword.type = passCheck1 == true ? 'text' : 'password'
}

//password visiblity (Repassword)
const passVisible2 = () => {
    passCheck2 = passCheck2 == false ? true : false
    sRePassword.type = passCheck2 == true ? 'text' : 'password'
}

//check box for correct information
var infoCheck = document.getElementById('infoCheck').value = false;

var infoBox = () => {
    infoCheck = infoCheck == false ? true : false
}


//Signup data to store in one Object
let signData = () => {
    const Uname = document.getElementById('Uname').value;
    const Email = document.getElementById('email').value;
    const Country = document.getElementById('country').value;
    const contact = document.getElementById('contact').value;
    const DOB = document.getElementById('dob').value;
    const Age = document.getElementById('age').value;
    const setPassword = document.getElementById('sPassword').value;
    const setRePassword = document.getElementById('sRePassword').value;
    let truePass;
    var info;

    //get gender value
    var Gender = document.querySelector('input[name = "gender"]:checked');

    if (setPassword.length >= 8 && setRePassword.length >= 8) {
        if (setPassword == setRePassword) {
            if (infoCheck == true) {
                alert("You are successfully register")
                truePass = setPassword == setRePassword ? setPassword : false;

                info = {
                    name: Uname,
                    Email,
                    Country,
                    Contact: contact,
                    Gender: Gender.value,
                    DOB,
                    Age,
                    Password: truePass,
                    infoCheck
                }
            }
        } else {
            alert("Password con't match");
        }
    } else {
        alert("Please enter valid password")
    }

localStorage.setItem('info', JSON.stringify(info))
    // console.log(info)
}
