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


function generatePassword(){
    var length = 0;
    var lower;
    var upper;
    var numbers;
    var special;
    var passwordReturn = "";

    length = prompt("How long would you like you password to be.");
    while((length < 8) || (128 < length)){
        length = prompt("Please enter a value between 8-128.");
    }

    lower = confirm("Would you like your password to contain lowercase.");
    upper = confirm("Would you like you password to contain uppercase.");
    numbers = confirm("Woudl you like numbers in you password.");
    special = confirm("Would you like your password to contain special charcters.");

    for(i = 0; i < length; i++){
        var type = Math.floor(Math.random() * 4);
        if(lower == true && type == 0){

            passwordReturn += lowerString.charAt(Math.floor(Math.random() * lowerString.length));

        }else if(upper == true && type == 1){

            passwordReturn += upperString.charAt(Math.floor(Math.random() * upperString.length));

        }else if(numbers == true && type == 2){

            passwordReturn += numberString.charAt(Math.floor(Math.random() * numberString.length));

        }else if(special == true && type == 3){

            passwordReturn += specialString.charAt(Math.floor(Math.random() * specialString.length));

        }
    }

    return passwordReturn;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
