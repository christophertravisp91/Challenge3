// Assignment code here
function generatePassword(length, lower, upper, number, symbol) {

// prompt for Length

function Length() {
  let answer = prompt("How many characters in your password?", "8 Characters - 128 Characters");
return answer;
}
const lengthAnswer = Length();

// prompt for Cases and styles

function lower() {
  let answer = confirm("Would you like to include lowercase letters?");
  return answer;
}
const lowerAnswer = lower();

function upper() {
  let answer = confirm("Would you like to include uppercase letters?");
  return answer;
}
const upperAnswer = upper();

function number() {
  let answer = confirm("Would you like to include numbers?");
  return answer;
}
const numberAnswer = number();

function symbol() {
  let answer = confirm("Would you like to include special symbols?");
  return answer;
}
const symbolAnswer = symbol();

  const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomsymbol
  };

  // random character functions
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26 + 97));
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26 + 65));
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10 + 48));
  }
  
  function getRandomsymbol() {
    const symbols = "!@#$%^&*(){}[]=<>,.'"
    return symbols [Math.floor(Math.random() * symbols.length)]
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
  const length = LengthAnswer.value;

  console.log (length);