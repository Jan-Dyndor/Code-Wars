// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//My solution
var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let human, cat, dog;
  if (humanYears === 1) {
    human = humanYears;
    cat = 15;
    dog = 15;
  } else if (humanYears === 2) {
    human = humanYears;
    cat = 15 + 9;
    dog = 15 + 9;
  } else if (humanYears >= 3) {
    cat = 15 + 9;
    dog = 15 + 9;
    human = humanYears;
    for (let i = 3; i <= humanYears; i++) {
      cat += 4;
      dog += 5;
    }
  }

  return [humanYears, cat, dog];
};

//other
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};
///
const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
