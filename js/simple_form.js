const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const EMAIL_REGEX = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
const PHONE_REGEX = RegExp('^[0-9]{1,2}\\s{1}[7-9]{1}[0-9]{9}$');
const PASSWORD_REGEX = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.{8,}$)[a-zA-Z0-9]*[@#$%^&-+=()][a-zA-Z0-9]*$')

// UC1: Checking if the user entered valid first name
const text = document.querySelector('#text');//taking the id text from the html
const textError = document.querySelector('.text-error');//taking the class text-error from the html
text.addEventListener('input', function () {//event listener 
    if (NAME_REGEX.test(text.value)) {//checking the regex pattern
        textError.textContent = "";//if the pattern matched then will show empty string
    } else {
        textError.textContent = "NAME Is Incorrect!";//if the pattern will not matched then will show error
    }
});


const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.innerHTML = salary.value;
salary.addEventListener('input', function () {
    output.innerHTML = salary.value;
});

// UC2: Checking if the user entered valid email id
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    if (EMAIL_REGEX.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "EMAIL Is Incorrect!";
    }
});

// UC3: Checking if the user entered valid telephone number
const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function () {
    if (PHONE_REGEX.test(telephone.value)) {
        telephoneError.textContent = "";
    } else {
        telephoneError.textContent = "TELEPHONE NUMBER Is Incorrect";
    }
});


// UC4: Checking if the user entered valid password
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function () {
    if (PASSWORD_REGEX.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "PASSWORD Is Incorrect";
    }
});