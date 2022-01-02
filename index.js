const {
  deStructureTimeIntoHoursAndMinutes,
  convertNumberToEnglishString,
} = require("./utils/helpers");

function wordifyTIme(timeInString) {
  let timeDifferenceInWords;

  // ! edge cases
  if (timeInString === "0:00") return "mid-night";
  if (timeInString === "12:00") return "mid-day";

  let intHours = Number(deStructureTimeIntoHoursAndMinutes(timeInString)[0]);
  let intMinutes = Number(deStructureTimeIntoHoursAndMinutes(timeInString)[1]);
  // ? based on mins diff : phrase the time
  let diff;

  // TODO: for to be cases e.g 8:45 = 15 to 9;

  if (intMinutes > 30) {
    diff = Math.abs(intMinutes - 60);
    timeDifferenceInWords = `${convertNumberToEnglishString(
      String(diff)
    )} to ${convertNumberToEnglishString(String(intHours + 1))}`;
  } else {
    // TODO: for half past cases

    timeDifferenceInWords = `${convertNumberToEnglishString(
      String(intMinutes)
    )} past ${convertNumberToEnglishString(String(intHours))}`;
  }

  return timeDifferenceInWords;
}

console.log(wordifyTIme("8:45"));
// fifteen to nine

console.log(wordifyTIme("8:23"));
//Twenty-Three past Eight

console.log(wordifyTIme("0:45"));
//Fifteen to One
