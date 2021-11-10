export function totalBirdCount(birdsPerDay) {
  let sum = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum
}

export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  let weekDays = 7;

  for (let i = (week * weekDays) - weekDays; i < week * weekDays; i++) {
    sum += birdsPerDay[i]
  }

  return sum
}

export function fixBirdCountLog(birdsPerDay) {

  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  }

  return birdsPerDay
}