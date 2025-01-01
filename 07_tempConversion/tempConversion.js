const convertToCelsius = function(tempFahrenheit) {
  let result = (tempFahrenheit - 32) * 5 / 9;
  return +roundDecimalPlaces(result, 1);
};

function roundDecimalPlaces (num, decimalPlaces) {
  if (Math.floor(num) !== num) {
    num = num.toFixed(decimalPlaces);
  }
  return +num;
}

const convertToFahrenheit = function(tempCelsius) {
  let result = tempCelsius* 9 / 5 + 32;
  return +roundDecimalPlaces(result, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
