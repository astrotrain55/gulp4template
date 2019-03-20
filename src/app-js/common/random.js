// Cлучайное число от 0(включительно) до 1
export function getRandom() {
  return Math.random();
}

// Случайное число между min и max
export function getRandomArbitary(min, max) {
  return Math.random() * (max - min) + min;
}

// Случайное целое между min и max
// использование Math.round() даст неравномерное распределение!
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
