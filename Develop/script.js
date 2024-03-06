// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// Function to generate password
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

//   // Validate password length
//   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     alert("Please enter a valid password length between 8 and 128 characters.");
//     // return "";
//   }

  // Prompt for character types
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
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
  password += allChars.charAt(Math.floor(Math.random() * allChars.length));
}

return password;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


