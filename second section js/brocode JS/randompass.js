// RANDOM PASSWORD GENERATOR
function generatePassword(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols){
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars    = "0123456789";
  const symbolChars    = "!@#$%^&*()_+-=";
  let allowedChars     = "";
  let password         = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(length <= 0){
    
    return `()`;
  }

  
  return '';
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(passwordLength, 
                                  includeLowercase,
                                  includeNumbers,
                                  includeUppercase,
                                  includeSymbols); 
console.log(`Generated password: ${password}`);
