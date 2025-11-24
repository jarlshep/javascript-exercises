const convertToCelsius = function(tempF) {
  let temp = (tempF - 32) * 5 / 9;
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let temp = (tempC * 9 / 5) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
