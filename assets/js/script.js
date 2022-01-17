// Assignment code here

// Object for variables and methods related to the password generation
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
    // Must reset object for multiple clicks of the "Generate Password" button to work properly
    passwordObject.reset();

    // Prompt user for the length from the acceptance criteria
    passwordObject.requestedLength = parseInt(window.prompt("Enter the desired length of the password (8-128 characters):"));

    // Check length and, if invalid, have the user try again
    if(passwordObject.requestedLength < 8 || passwordObject.requestedLength > 128) {
        window.alert("Error: length must be a number from 8 through 128. Please try again.");
        return generatePassword();
    }

    // Prompt user for which of the 4 character types should be included in the password
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

    /*
        If user chose no character sets, includedChars will still be an empty string (falsy value)
        So test !includedChars. If true, they did not select at least 1 character type. Have the user try again
    */
    if(!passwordObject.includedChars) {
        window.alert("Error: at least one character type must be selected. Please try again.");
        return generatePassword();        
    }

    // Select a random character from the selected list, and append it to the password until desired length is reached
    for(var i = 0; i < passwordObject.requestedLength; i++) {
        passwordObject.passwordText = passwordObject.passwordText + passwordObject.includedChars.charAt(Math.floor(Math.random() * passwordObject.includedChars.length));
    }
    
    // Return the randomly-generated password so writePassword() can display it in the HTML textarea
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
