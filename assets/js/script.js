// Assignment code here
var passwordObject = {
    requestedLength: 0,
    includedChars: "",
    passwordText: "",
    reset: function() {
        this.requestedLength = 0;
        this.includedChars = "";
        this.passwordText = "";
    }
}

var generatePassword = function() {
    passwordObject.reset();
    passwordObject.requestedLength = parseInt(window.prompt("Enter the desired length of the password (8-128 characters):"));
    if(passwordObject.requestedLength < 8 || passwordObject.requestedLength > 128) {
        window.alert("Error: length must be a number from 8 through 128. Please try again.");
        return generatePassword();
    }
    if(window.confirm("Include lowercase characters in the password?")) {
        passwordObject.includedChars = "abcdefghijklmnopqrstuvwxyz";
    }
    if(window.confirm("Include uppercase characters in the password?")) {
        passwordObject.includedChars = passwordObject.includedChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(window.confirm("Include numeric characaters in the password?")) {
        passwordObject.includedChars = passwordObject.includedChars + "0123456789";
    }
    if(window.confirm("include special characters in the password?")) {
        passwordObject.includedChars = passwordObject.includedChars + " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }
    if(!passwordObject.includedChars) {
        window.alert("Error: at least one character type must be selected. Please try again.");
        return generatePassword();        
    }
    for(var i = 0; i < passwordObject.requestedLength; i++) {
        passwordObject.passwordText = passwordObject.passwordText + passwordObject.includedChars.charAt(Math.floor(Math.random() * passwordObject.includedChars.length));
    }
    return passwordObject.passwordText;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
