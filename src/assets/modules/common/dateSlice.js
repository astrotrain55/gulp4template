// Двойное число даты и месяца

export function getDateSlice(date = getDate()) {
  return ("0" + date).slice(-2);
}

export function getMonthSlice(month = getMonth()) {
  return ("0" + (month + 1)).slice(-2);
}

export function getFormatDate(date = new Date(), reverse = true, separator = ".") {
  const day = getDateSlice(date.getDate());
  const month = getMonthSlice(date.getMonth());
  const year = date.getFullYear();
  return (reverse) ? `${year}${separator}${month}${separator}${day}` : `${day}${separator}${month}${separator}${year}`;
}
