// #generate element
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbolys');
const generateBtn = document.querySelector("#generate");


const randomeFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbols.checked;

  resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate password function 
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  const typesCont = lower + upper + number + symbol;

  console.log('typesCount: ', typesCont);

  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
      item => Object.values(item)[0]
    );

  console.log('typesArr: ', typeArr);

  if (typesCont === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCont) {
    typeArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      generatedPassword += randomeFunc[funcName]();
    });
  }

  // console.log(generatedPassword)
}


// Generator Functions 
function getRandomLower() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]-_=+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

