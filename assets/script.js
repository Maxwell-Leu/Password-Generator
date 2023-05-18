// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerString = 'abcdefghijklmnopqrstuvwxyz';
const upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberString = '0123456789';
const specialString = ',./;\'[][]`~!@#$%^&*()_+|\"\\';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Asks the user about their password and generates it
function generatePassword(){
    // Used variables
    var passLength = 0;
    var lower;
    var upper;
    var numbers;
    var special;
    var passwordReturn = "";
    var canUse = []

    // Setting the initial value for the while loop
    passLength = prompt("How long would you like you password to be.");

    // Loops until valid number given
    while((passLength < 8) || (128 < passLength)){
        passLength = prompt("Please enter a value between 8-128.");
    }

    // Asking for rules
    lower = confirm("Would you like your password to contain lowercase.");
    upper = confirm("Would you like you password to contain uppercase.");
    numbers = confirm("Would you like numbers in you password.");
    special = confirm("Would you like your password to contain special charcters.");

    // Creates a array of allowed Characters
    if(lower == true){
        canUse.push(lowerString);
    }
    if(upper == true){
        canUse.push(upperString);
    }
    if(numbers == true){
        canUse.push(numberString);
    }
    if(special == true){
        canUse.push(specialString);
    }

    // Gernerating the password
    for(i = 0; i < passLength; i++){
        var index = Math.floor(Math.random() * canUse.length);

        passwordReturn += canUse[index].charAt(Math.floor(Math.random() * specialString.length));
    }

    return passwordReturn;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
