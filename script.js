// Assignment code here

// Declare variables
var capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?","@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Declare function for generatePassword
function generatePassword() {

  // Declare variables to be used within the function 
  var includeCapital = window.confirm("Would you like to include Capital Letters?");
  var includeLowerCase = window.confirm("Would you like to use Lower Case Letters?");
  var includeNumbers = window.confirm ("Would you like to use numbers?");
  var includeSpecial = window.confirm ("Would you like to use Special Characters?");

  // Write an if statement for password conditions
  // Using Concat method to make new arrays for each condition
  if (includeCapital && includeLowerCase && includeNumbers && includeSpecial) {
    var includeAll = capitalLetter.concat(lowerCaseLetter, numbers, specialCharacter)
  } else if (!includeCapital && includeLowerCase && includeNumbers && includeSpecial) {
    var excludeCapital = lowerCaseLetter.concat(numbers, specialCharacter);
  } else if (!includeCapital && !includeLowerCase && includeNumbers && includeSpecial) {
    var excludeLetters = numbers.concat(specialCharacter);
  } else if (includeCapital && !includeLowerCase && includeNumbers && includeSpecial) {
    var excludeLowerCase = capitalLetter.concat(numbers, specialCharacter);
  } else if (includeCapital && includeLowerCase && !includeNumbers && includeSpecial) {
    var excludeNumbers = capitalLetter.concat(lowerCaseLetter, specialCharacter);
  } else if (includeCapital && includeLowerCase && includeNumbers && !includeSpecial) {
    var excludeSpecial = capitalLetter.concat (lowerCaseLetter, numbers);
  } else if (includeCapital && includeLowerCase && !includeNumbers && !includeSpecial) {
    var lettersOnly = capitalLetter.concat(lowerCaseLetter);
  } else if (includeCapital && !includeLowerCase && includeNumbers && !includeSpecial) {
    var capitalNumbers = capitalLetter.concat(numbers);
  } else if (includeCapital && !includeLowerCase && !includeNumbers && includeSpecial) {
    var capitalSpecial = capitalLetter.concat(specialCharacter);
  } else if (!includeCapital && includeLowerCase && includeNumbers && !includeSpecial) {
    var lowerCaseNumbers = lowerCaseLetter.concat(numbers);
  } else if (!includeCapital && includeLowerCase && !includeNumbers && includeSpecial) {
    var lowerCaseSpecial = lowerCaseLetter.concat(specialCharacter);
  } else if (includeCapital && !includeLowerCase && !includeNumbers && !includeSpecial) {
    capitalLetter
  } else if (!includeCapital && includeLowerCase && !includeNumbers && !includeSpecial) {
    lowerCaseNumbers
  } else if (!includeCapital && !includeLowerCase && includeNumbers && !includeSpecial) {
    numbers
  } else if (!includeCapital && !includeLowerCase && !includeNumbers && includeSpecial) {
    specialCharacter
  }
  

  
}

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
