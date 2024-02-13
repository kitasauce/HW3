// Assignment code here
var length = 8;
var choices = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

function generatePassword() {
  var password = ""; 
  for(var i = 0; i < length; i++) {
    var randomletter = Math.floor(Math.random() * choices.length);
    password = password + choices[randomletter]
  }
return password;
}

function prompts() {
  choices = [];
  var length = parseInt(prompt("How many characters would you like your password to be? (Between 8 and 128 characters)"));
    if(isNaN(length) || length < 8 || length > 128) {
      alert("character length must be a number between 8 and 128")
      return false
    }
    if (confirm("Do you want lowercase letters in your password?")); {
      choices = choices.concat(lowercase);
    }
    if (confirm("Do you want uppercase letters in your password?")); {
      choices = choices.concat(uppercase);
    }  
    if (confirm("Do you want numbers in your password?")); {
      choices = choices.concat(numeric);
    }
    if (confirm("Do you want special characters in your password?")); {
      choices = choices.concat(special);
    }
   
    return true; 
}

// Write password to the #password input
function writePassword() {
  var correctprompts = prompts();
    if (correctprompts) {
      var newpassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = newpassword;
    } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


