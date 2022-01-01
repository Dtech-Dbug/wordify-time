const {
  deStructureTimeIntoHoursAndMinutes,
  convertNumberToEnglishString,
} = require("./utils/helpers");

function wordifyTIme(timeInString) {
  let timeToldInString;
  let diffInMinutes = 0;

  // ! edge cases
  if (timeInString === "0:00") return "mid-night";
  if (timeInString === "12:00") return "mid-day";

  let intHours = Number(deStructureTimeIntoHoursAndMinutes(timeInString)[0]);
  let intMinutes = Number(deStructureTimeIntoHoursAndMinutes(timeInString)[1]);
  // ? based on mins diff : phrase the time
  let diff;

  // TODO: for half passed cases
  if (intMinutes > 30) {
    diff = Math.abs(intMinutes - 60);
    timeToldInString = `${convertNumberToEnglishString(
      String(diff)
    )} to ${convertNumberToEnglishString(String(intHours + 1))}`;
  } else {
    // TODO: for to be cases e.g 8:45 = 15 to 9;
    timeToldInString = `${convertNumberToEnglishString(
      String(intMinutes)
    )} passed ${convertNumberToEnglishString(String(intHours))}`;
  }

  return timeToldInString;
}

console.log(wordifyTIme("8:45"));
// fifteen to nine

console.log(wordifyTIme("8:23"));
//Twenty-Three passed Eight

console.log(wordifyTIme("0:45"));
//Fifteen to One
