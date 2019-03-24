// Двойное число даты и месяца

export function getDateSlice(date = new Date().getDate()) {
  return Number(('0' + date).slice(-2));
}

export function getMonthSlice(month = new Date().getMonth()) {
  return Number(('0' + (month + 1)).slice(-2));
}
