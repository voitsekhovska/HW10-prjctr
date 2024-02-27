"use strict";

// 1. Задача про обчислення різниці часу

function durationBetweenDates(
  firstDate = "2019-04-12",
  lastDate = "2020-06-30",
  dimension
) {
  let day1 = new Date(firstDate);
  let day2 = new Date(lastDate);
  let duration = Math.abs(day2.getTime() - day1.getTime());

  if (dimension === "seconds") {
    return duration / 1000;
  } else if (dimension === "hours") {
    return duration / (1000 * 60 * 60);
  } else if (dimension === "days") {
    return duration / (1000 * 60 * 60 * 24);
  } else {
    return duration;
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
