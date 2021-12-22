const NUMBER_MAP = require("./numberMap");

function deStructureTimeIntoHoursAndMinutes(stdTimeFormat) {
  return stdTimeFormat.split(":");
}

function convertNumberToEnglishString(numericTime) {
  let result;
  // ? ref to the array of keys in the dict
  let timeInNumericArray = Object.keys(NUMBER_MAP);

  // ? loop thru the array of time to extract it's associated english value
  for (let i = 0; i < timeInNumericArray.length; i++) {
    if (timeInNumericArray[i] === numericTime) {
      return NUMBER_MAP[i];
    }
  }
}

module.exports = {
  deStructureTimeIntoHoursAndMinutes,
  convertNumberToEnglishString,
};
