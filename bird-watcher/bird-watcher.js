// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }

  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // week 1 -> 0 ao 6 (7)
  // week 2 -> 7 ao 13 (14)
  // week 3 -> 14 ao 20 (21)

  let thisWeek = [];

  if (week === 1) {
    thisWeek = birdsPerDay.slice(0, 7);
  } else {
    let index = (week - 1) * 7;

    thisWeek = birdsPerDay.slice(index, week * 7);
  }

  let total = 0;

  for (let i = 0; i < thisWeek.length; i++) {
    total += thisWeek[i];
  }

  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}
