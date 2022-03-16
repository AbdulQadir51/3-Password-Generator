// Assignment code here

// function to take password length as input and validate the length between 8 - 128
function password_length() {
    let pwd_length = prompt("How long do you want the password to be?");
    while (pwd_length < 8 || pwd_length > 128) {
        if (pwd_length < 8) {
            alert("password should not be lesser than 8 characters. Please try again")
            pwd_length = prompt("How long do you want the password to be?");
        }
        if (pwd_length > 128) {
            alert("password should not be greater than 128 characters. Please try again")
            pwd_length = prompt("How long do you want the password to be?");
        }
    }
    return pwd_length
}


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Get references to the #generate element

// Do you want to have upper case letter Lower case letters
// Do you want special charachter
// Do you want numbers
// How long do you want the password to be

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var passwordText = document.querySelector("#password");

function generatePassword(pwd_length, has_lower_case, has_upper_case, has_special_char, has_numbers) {
    var length = pwd_length,
        charset = "",
        retVal = "";

    if (has_lower_case) {
        // add lower case alphabets to charset 
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (has_upper_case) {
        // add upper case alphabets to charset 
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (has_numbers) {
        // add lower case numbers to charset 
        charset += "0123456789"
    }
    if (has_special_char) {
        // add lower case special characters to charset 
        charset += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }

    // genrate random password including above charset
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function writePassword() {
    var pwd_length = password_length();
    //lower case 
    var has_lower_case = confirm("Do you want to include lower case characters ?");
    // upper case 
    var has_upper_case = confirm("Do you want to include upper case characters ?");
    // special characters
    var has_special_char = confirm("Do you want to include special characters ?");
    // numbers
    var has_numbers = confirm("Do you want to include numbers ?");

    // Prompt user again until he selects at least one character type
    while (!has_lower_case && !has_upper_case && !has_special_char && !has_numbers) {
        alert("Please select at least one character type !")
        has_lower_case = confirm("Do you want to include lower case characters ?");
        has_upper_case = confirm("Do you want to include upper case characters ?");
        has_special_char = confirm("Do you want to include special characters ?");
        has_numbers = confirm("Do you want to include numbers ?");

    }
    var password = generatePassword(pwd_length, has_lower_case, has_upper_case, has_special_char, has_numbers);
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);