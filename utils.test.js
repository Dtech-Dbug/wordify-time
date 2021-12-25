const {
  deStructureTimeIntoHoursAndMinutes,
  convertNumberToEnglishString,
} = require("./utils/helpers");

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("6:30")).toStrictEqual(["6", "30"]);
});

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("0:00")).toStrictEqual(["0", "00"]);
});

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("9:15")).toStrictEqual(["9", "15"]);
});
