export function frontDoorResponse(line) {
  return line[0];
}


export function frontDoorPassword(word) {
  let sentenceRemainder = word.slice(1, word.length).toLowerCase();
  let firstLetter = word.slice(0, 1).toUpperCase()
  let password = firstLetter + sentenceRemainder
  return password
}


export function backDoorResponse(line) {
  let trimLine = line.trim()
  return trimLine[trimLine.length - 1]
}


export function backDoorPassword(word) {
  let sentenceRemainder = word.slice(1, word.length).toLowerCase();
  let firstLetter = word.slice(0, 1).toUpperCase()
  let password = firstLetter + sentenceRemainder
  let polite = ', please'
  return password + polite
}