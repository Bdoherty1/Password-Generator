// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Character sets
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";




// Function to generate password
function generatePassword() {

    // Prompt for character types
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));


  // Validate password length
  if ( passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    var passwordLength = prompt("Chose a password length of at least 8 characters")
  }


  // Validate at least one character type is selected
  else if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

// Concatenate 
var allChars = "";
if (includeLowercase) allChars += lowercaseChars;
if (includeUppercase) allChars += uppercaseChars;
if (includeNumeric) allChars += numericChars;
if (includeSpecial) allChars += specialChars;

// Generate password
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomString = allChars.charAt(Math.floor(Math.random() * allChars.length));
  password += randomString; // Concatenate random character to password string
}
// return password;
console.log(password.join(''));
return (password.join(''));
}
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


