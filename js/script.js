"use strict";

// 1. Задача про обчислення різниці часу

function durationBetweenDates(
  firstDate = "2019-04-12",
  lastDate = "2020-06-30",
  dimension = "milliseconds"
) {
  let duration = Math.abs(
    new Date(lastDate).getTime() - new Date(firstDate).getTime()
  );

  switch (dimension) {
    case "seconds":
      return duration / 1000 + " seconds";
    case "hours":
      return duration / (1000 * 60 * 60) + " hours";
    case "days":
      return duration / (1000 * 60 * 60 * 24) + " days";
    default:
      return duration + " milliseconds";
  }
}

console.log(durationBetweenDates("2010-01-30", "2010-06-07", "seconds"));
console.log(durationBetweenDates("2010-01-30", "2010-06-07", "hours"));
console.log(durationBetweenDates("2010-01-30", "2010-06-07", "days"));
console.log(durationBetweenDates("2010-01-30", "2010-06-07"));
console.log(durationBetweenDates());

console.log(durationBetweenDates("1985-08-02", "1985-02-05", "days"));

// 2. Масив унікальних значень

const userNames = [
  "Петро",
  "Емма",
  "Петро",
  "Емма",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
  "Емма",
];

function filterUnique(array) {
  return [...new Set(array)];
}

console.log(filterUnique(userNames));
