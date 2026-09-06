const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const submitSuccess = document.getElementById("submitSuccess");

function submit(){
    let isValid = true;
    if(username.value.length < 5){
        userError.innerText= "Username must be at least 5 characters long.";
        isValid = false;
    }

    if (
        !/[A-Z]/.test(password.value) ||
        !/[a-z]/.test(password.value) ||
        !/[0-9]/.test(password.value)
    ) {
        passError.innerText = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
        isValid = false;
    }

    if (isValid) {
        submitSuccess.innerText = "!successfully submitted Form";
    }
};