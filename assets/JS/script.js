// Assignment code here

// Declare variables
var capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Declare function for generatePassword
function generatePassword() {

  //Declare variable for Password Length
  var passwordLength = window.prompt("Please select a password length between 8 and 128 characters");
  if (!passwordLength) {
    return placeholder;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    var lengthError = window.alert("Error!\nPlease select a password length between 8 and 128 characters.");
    return placeholder;
  }

  // Declare variables to be used within the function 
  var includeCapital = window.confirm("Would you like to include Capital Letters?");
  var includeLowerCase = window.confirm("Would you like to use Lower Case Letters?");
  var includeNumbers = window.confirm("Would you like to use numbers?");
  var includeSpecial = window.confirm("Would you like to use Special Characters?");

  // Write an if statement for password conditions
  // Using Concat method to make new arrays for each condition

  // Include all possible character types
  if (includeCapital && includeLowerCase && includeNumbers && includeSpecial) {
    var include = capitalLetter.concat(lowerCaseLetter, numbers, specialCharacter);
    console.log(include)
    var confirm = window.confirm("Please Confirm:\nYou would like to include Capital Letters, Lower Case Letters, Numbers and Special Characters?");
    if(!confirm) {
      return placeholder;
    } else {
      for (var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray= password.split("HTMLTextAreaElement]")
      var result=resultArray[1]
      return result;
    }
    // Lower Case, Numbers and Special
  } else if (!includeCapital && includeLowerCase && includeNumbers && includeSpecial) {
    var include = lowerCaseLetter.concat(numbers, specialCharacter);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Lower Case Letters, Numbers and Special Characters?");
    if(!confirm){
      return placeholder;
    } else{
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
    var resultArray = password.split("HTMLTextAreaElement]");
    var result = resultArray[1];
    return result;
    }
    // Numbers and Special
  } else if (!includeCapital && !includeLowerCase && includeNumbers && includeSpecial) {
    var include = numbers.concat(specialCharacter);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Numbers and Special Characters?");
    if(!confirm) {
      return placeholder;
    }
    else{
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray = password.split("HTMLTextAreaElement]");
      var result = resultArray[1];
      return result;
    }
    // Capital, Numbers and Special
  } else if (includeCapital && !includeLowerCase && includeNumbers && includeSpecial) {
    var include = capitalLetter.concat(numbers, specialCharacter);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Capital Letters, Numbers and Special Characters?");
    if (!confirm){
      return placeholder;
    }
    else {
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray = password.split("HTMLTextAreaElement]");
      var result = resultArray[1]
      return result;
    }
    // Capital, Lower Case and Special
  } else if (includeCapital && includeLowerCase && !includeNumbers && includeSpecial) {
    var include = capitalLetter.concat(lowerCaseLetter, specialCharacter);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Capital Letters, Lower Case Letters and Special Characters?");
    if (!confirm){
      return placeholder;
    }
    else {
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray = password.split("HTMLTextAreaElement]");
      var result = resultArray[1]
      return result;
    }
    // Capital, Lower Case and Numbers
  } else if (includeCapital && includeLowerCase && includeNumbers && !includeSpecial) {
    var include = capitalLetter.concat(lowerCaseLetter, numbers);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Capital Letters, Lower Case Letters and Numbers?");
    if (!confirm){
      return placeholder;
    }
    else {
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray = password.split("HTMLTextAreaElement]");
      var result = resultArray[1]
      return result;
    }
    // Capital and Lower Case
  } else if (includeCapital && includeLowerCase && !includeNumbers && !includeSpecial) {
    var include = capitalLetter.concat(lowerCaseLetter);
    var confirm = window.confirm("Please Confirm:\nYou would like to include Capital Letters and Lower Case Letters?");
    if (!confirm){
      return placeholder;
    }
    else {
      for(var i = 0; i < passwordLength; i++) {
        password += include[Math.floor(Math.random()*include.length)];
      }
      var resultArray = password.split("HTMLTextAreaElement]");
      var result = resultArray[1]
      return result;
    }
  } else if (includeCapital && !includeLowerCase && includeNumbers && !includeSpecial) {
    var capitalNumbers = capitalLetter.concat(numbers);
  } else if (includeCapital && !includeLowerCase && !includeNumbers && includeSpecial) {
    var capitalSpecial = capitalLetter.concat(specialCharacter);
  } else if (!includeCapital && includeLowerCase && includeNumbers && !includeSpecial) {
    var lowerCaseNumbers = lowerCaseLetter.concat(numbers);
  } else if (!includeCapital && includeLowerCase && !includeNumbers && includeSpecial) {
    var lowerCaseSpecial = lowerCaseLetter.concat(specialCharacter);
  } else if (includeCapital && !includeLowerCase && !includeNumbers && !includeSpecial) {
    capitalLetter;
  } else if (!includeCapital && includeLowerCase && !includeNumbers && !includeSpecial) {
    lowerCaseLetter;
  } else if (!includeCapital && !includeLowerCase && includeNumbers && !includeSpecial) {
    numbers;
  } else if (!includeCapital && !includeLowerCase && !includeNumbers && includeSpecial) {
    specialCharacter;
  } else {
    var typeError = window.alert("Error!\nPlease select at least one Character Type.")
    return;
  }





}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var placeholder = document.getElementById("password").placeholder;
  console.log (placeholder)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
