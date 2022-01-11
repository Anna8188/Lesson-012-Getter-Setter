"use strict";

/* The input is object, which `keys` are student's names and `values` are `array` of their scores.
   Find the student with the best average score. */

function getBestStudent(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "The argument of function must be an object!";
  }

  let ArrAverageScore = [];

  for (var prop in obj) return obj[0];
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
); // 90

console.log(
  getBestStudent({
    Joe: [10, 60, 100],
    Kate: 100,
  })
);
