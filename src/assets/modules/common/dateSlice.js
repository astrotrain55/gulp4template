// Двойное число даты и месяца

export function getDateSlice(date = getDate()) {
  return ("0" + date).slice(-2);
}

export function getMonthSlice(month = getMonth()) {
  return ("0" + (month + 1)).slice(-2);
}
