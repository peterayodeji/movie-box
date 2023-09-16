export function getRandomIntAsDecimal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt + ".0";
}

export function getUTCDate(dateString) {
  const utcDate = new Date(dateString + "T00:00:00Z");

  // Append time and UTC indicator
  const utcDateFormatted = utcDate.toUTCString();

  return utcDateFormatted;
}
