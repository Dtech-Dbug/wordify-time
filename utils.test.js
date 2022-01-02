const {
  deStructureTimeIntoHoursAndMinutes,
  convertNumberToEnglishString,
} = require("./utils/helpers");

const numberMap = require("./utils/numberMap");

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("6:30")).toStrictEqual(["6", "30"]);
});

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("0:00")).toStrictEqual(["0", "00"]);
});

test('should time be split on ":"', () => {
  expect(deStructureTimeIntoHoursAndMinutes("9:15")).toStrictEqual(["9", "15"]);
});

test("number map", () => {
  expect(numberMap[2]).toBe("Two");
});

test("number map", () => {
  expect(numberMap[4]).toBe("Four");
});

test("number map", () => {
  expect(numberMap[5]).toBe("Five");
});

test("number map", () => {
  expect(numberMap[8]).toBe("Eight");
});
