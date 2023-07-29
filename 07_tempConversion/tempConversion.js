const convertToCelsius = function(a) {
  let celsius = (a - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
  return zaokcel;
};

const convertToFahrenheit = function(b) {
  let fahrenheit = (b * 9/5) + 32;
  let zaokfah = Math.round(fahrenheit * 10) / 10;
  return zaokfah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
